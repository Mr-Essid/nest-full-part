import { IsString } from "@nestjs/class-validator"


export class GeminiMessageDto {
    @IsString()
    content: String;
}