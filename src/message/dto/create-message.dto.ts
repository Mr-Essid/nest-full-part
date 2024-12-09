import { IsString } from "class-validator";
import { isValidObjectId } from "mongoose";

type MessageStructure = {
    content: String,
    sendId: String,
    matchId: String,
    senderName: String
}

export class CreateMessageDto {
    constructor(
        messageS: MessageStructure
    ) {
        this.content = messageS.content,
            this.senderName = messageS.senderName,
            this.matchId = messageS.matchId,
            this.senderId = messageS.sendId
    }
    @IsString()
    content: String
    senderId: String
    matchId: String
    senderName: String
}
