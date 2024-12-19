import { Module } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { GeminiController } from './gemini.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/entities/user.entity';
import { Terrain } from 'src/terrain/entities/terrain.entity';
import { GeminiProModelProvider } from './gemini.provider';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Terrain.name, schema: Terrain },
    ]),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
    ]),
  ],
  providers: [GeminiService, GeminiProModelProvider],
  controllers: [GeminiController]
})
export class GeminiModule { }
