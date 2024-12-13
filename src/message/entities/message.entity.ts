import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsDate, IsString } from "class-validator";
import { timeStamp } from "console";
import { HydratedDocument, Types } from "mongoose";
import { Match } from "src/match/entities/match.entity";
import { User } from "src/user/entities/user.entity";

export type MessageDocuement = HydratedDocument<Message>;

@Schema({ timestamps: true })
export class Message {

    @Prop()
    content: String;

    @Prop({ type: Types.ObjectId, ref: 'Match' })
    matchId: Match

    @Prop({ type: Types.ObjectId, ref: 'User' })
    userId: User

    @Prop()
    userName: String

}

export const MessageSchema = SchemaFactory.createForClass(Message);