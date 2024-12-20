import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { MatchPlayerService } from './match-player.service';
import { GetCurrentUserId, Public } from 'src/common/decorators';

@Controller('match-player')
export class MatchPlayerController {
  constructor(private readonly matchPlayerService: MatchPlayerService) { }

  @Post('/join/:matchId')
  joinMatch(@Param() param, @GetCurrentUserId() userId: string) {

    return this.matchPlayerService.joinMatch(param, userId);

  }

  // @Get('/mine')
  // findMyMatchPlayer(@GetCurrentUserId() userId: string) {
  //   try {
  //     return this.matchPlayerService.findMyMatchPlayer(userId.trim());
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  @Public()
  @Get('/all')
  findAllMatchPlayer() {
    return this.matchPlayerService.findAllMatchPlayer();
  }


  @Put("/accept/:matchPlayerId")
  acceptMatchPlayerId(@Param("matchPlayerId") matchPlayerId: string, @GetCurrentUserId() userId: string) {

    return this.matchPlayerService.acceptePlayerOfMatch(userId, matchPlayerId);
  }


  @Put("/refuse/:matchPlayerId")
  refuseMatchPlayerId(@Param("matchPlayerId") matchPlayerId: string, @GetCurrentUserId() userId: string) {
    return this.matchPlayerService.refusePlayerOfMatch(userId, matchPlayerId);
  }

  @Put("/cancel/:matchPlayerId")
  cancelRequest(@Param("matchPlayerId") matchPlayerId: string, @GetCurrentUserId() userId: string) {
    return this.matchPlayerService.cancelRequet(userId, matchPlayerId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchPlayerService.findJoinedMatchById(id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateMatchPlayerDto: UpdateMatchPlayerDto,
  // ) {
  //   return this.matchPlayerService.update(+id, updateMatchPlayerDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.matchPlayerService.remove(+id);
  // }
}
