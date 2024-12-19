import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { GEMINI_MODEL_NAME } from './gemini.config';
import { ChatSession, GenerativeModel, StartChatParams } from '@google/generative-ai';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/entities/user.entity';
import { Terrain } from 'src/terrain/entities/terrain.entity';


type Session = {
    history: []
}

@Injectable()
export class GeminiService {
    constructor(
        @Inject(GEMINI_MODEL_NAME) private readonly modelInstance: GenerativeModel,
        @InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(Terrain.name) private terrainModel: Model<Terrain>,
    ) { }
    private session: Map<String, StartChatParams> = new Map();

    async getSession(sessionId: String): Promise<StartChatParams> {
        const currenSession = this.session.get(sessionId);

        if (currenSession == undefined) {
            const currentManger = await this.userModel.findById(sessionId);

            if (!currentManger)
                throw new HttpException('user not found', HttpStatus.NOT_FOUND);

            const terrainInfo = await this.terrainModel.findOne({ managerId: currentManger._id.toString() }).populate(
                [
                    {
                        select: '-createdAt -updatedAt -__v',
                        path: 'matchsIn',
                        populate: [
                            {
                                path: 'userId',
                                select: 'name email'
                            },
                            {
                                path: 'playersOfMatch',
                                populate: {
                                    path: 'userId',
                                    select: 'name email'
                                },
                                select: '-createdAt -updatedAt -__v'
                            }
                        ]
                    }
                ]
            ).exec();


            this.session.set(sessionId, {
                history: [
                    {
                        "role": "user",
                        "parts": [
                            { 'text': 'data provided ' + JSON.stringify(terrainInfo) }
                        ]
                    }
                ]
            });

        }
        return this.session.get(sessionId);

    }

    destorySession(sessionId: String) {
        this.session.delete(sessionId);
        return {
            'message': 'session destroied'
        };
    }


    async sendMessage(sessionId: String, content: String) {
        const sessionObject = await this.getSession(sessionId);
        const modelInstanceWithContext = this.modelInstance.startChat(sessionObject);
        return (await modelInstanceWithContext.sendMessage(content.toString())).response.candidates;
    }





}
