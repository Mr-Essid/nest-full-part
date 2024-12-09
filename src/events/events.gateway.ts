import { JwtService } from '@nestjs/jwt';
import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { JwtPayload } from 'src/auth/types';
import { MatchService } from 'src/match/match.service';
import { CreateMessageDto } from 'src/message/dto/create-message.dto';
import { MessageService } from 'src/message/message.service';
import { UserService } from 'src/user/user.service';

type WebSocketPayloadType = {
  content: String,
  userName: String
}

@WebSocketGateway()
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  server: Server
  constructor(private messageService: MessageService, private matchService: MatchService, private userService: UserService, private jwtService: JwtService) { }

  async handleConnection(client: Socket, ...args: any[]) {
    // we gonna make all auth stuff right here!
    // check the user cridentials token, sessionId

    const token = client.handshake.headers.authorization?.split(" ").at(1);
    const matchId = client.handshake.query['roomId'] as string;
    console.log(token, matchId);
    if (token == undefined || matchId == undefined)
      client.disconnect();

    // throw exeption when the token not valid!
    const userId = this.jwtService.verify(token, { secret: process.env.AT_SECRET }) as JwtPayload
    const user = await this.userService.currentUser(userId.sub);

    client.data = {
      name: user.name,
      userId: user.id,
      matchId: matchId
    };

    client.join(matchId);

  }



  handleDisconnect(client: Socket) {
    client.data = undefined;
  }


  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any): string {
    console.log(client.data.name);
    this.messageService.create(new CreateMessageDto({ senderName: client.data.name, sendId: client.data.userId, matchId: client.data.matchId, content: payload }))
    this.server.to(client.data.matchId).emit('response', { senderName: client.data.name, content: payload });
    return "emitted";
  }



}
