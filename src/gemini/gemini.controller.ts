import { Body, Controller, Delete, Get, Inject, Post } from '@nestjs/common';
import { GetCurrentUserId } from 'src/common/decorators';
import { GeminiService } from './gemini.service';
import { GeminiMessageDto } from './dto/gemini-message.dto';

@Controller('gemini')
export class GeminiController {

    constructor(@Inject() private readonly geminiService: GeminiService) { }


    @Get('message')
    sendMessage(@GetCurrentUserId() sub, @Body() messageDto: GeminiMessageDto) {
        return this.geminiService.sendMessage(sub, messageDto.content);
    }

    @Delete('session')
    destroySessoin(@GetCurrentUserId() sub) {
        return this.geminiService.destorySession(sub);
    }
}



