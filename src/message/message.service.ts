import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from './entities/message.entity';
import { Model } from 'mongoose';

@Injectable()
export class MessageService {

  constructor(
    @InjectModel(Message.name)
    private messageModel: Model<Message>
  ) { }

  async create(createMessageDto: CreateMessageDto) {
    // what ugly syntax bro LOL:w
    return await this.messageModel.create({
      userId: createMessageDto.senderId,
      matchId: createMessageDto.matchId,
      content: createMessageDto.content,
      userName: createMessageDto.senderName
    });
  }

  findAll() {
    return `This action returns all message`;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  async findMessagesOfMatch(matchId: String) {
    return await this.messageModel.find({ matchId: matchId }, "userId content createdAt").populate({ path: 'userId', select: '_id name' });

  }


  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
