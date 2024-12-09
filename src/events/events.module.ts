import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { MessageModule } from 'src/message/message.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from 'src/message/entities/message.entity';
import { MatchModule } from 'src/match/match.module';

@Module({
  providers: [
    EventsGateway,
  ],
  imports: [
    UserModule, JwtModule.register({ secret: process.env.AT_SECRET }), MessageModule, MatchModule
  ]

})
export class EventsModule { }
