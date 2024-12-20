import { Body, Controller, Delete, Get, Inject, Post } from '@nestjs/common';
import { GetCurrentUserId } from 'src/common/decorators';
import { GeminiService } from './gemini.service';
import { GeminiMessageDto } from './dto/gemini-message.dto';

@Controller('gemini')
export class GeminiController {

    constructor(@Inject() private readonly geminiService: GeminiService) { }


    @Post('message')
    sendMessage(@GetCurrentUserId() sub, @Body() messageDto: GeminiMessageDto) {
        try {
            return this.geminiService.sendMessage(sub, messageDto.content);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    @Delete('session')
    destroySessoin(@GetCurrentUserId() sub) {
        return this.geminiService.destorySession(sub);
    }
}



