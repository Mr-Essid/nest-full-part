import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from './mailer/mailer.module';
import { MatchModule } from './match/match.module';
import { MatchPlayerModule } from './match-player/match-player.module';
import { TerrainModule } from './terrain/terrain.module';
import { JwtService } from '@nestjs/jwt';
import { EventsModule } from './events/events.module';
import { MessageModule } from './message/message.module';
import { GeminiModule } from './gemini/gemini.module';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
    MailerModule,
    MatchModule,
    MatchPlayerModule,
    TerrainModule,
    EventsModule,
    MessageModule,
    GeminiModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard
    }
  ]
})
export class AppModule { }
