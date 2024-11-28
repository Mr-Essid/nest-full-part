import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MatchService } from './match.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { GetCurrentUserId, Public } from 'src/common/decorators';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) { }

  @Get("/:idMatch")
  getMatchByid(@Param("idMatch") matchid) {
    return this.matchService.findMatchById(matchid);
  }

  @Post()
  createMatch(
    @GetCurrentUserId() id: string,
    @Body() createMatchDto: CreateMatchDto,
  ) {
    return this.matchService.createMatch(id, createMatchDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.matchService.findAllMatches();
  }

  @Get('/my-matches')
  findOne(@GetCurrentUserId() id: string) {
    return this.matchService.findMyMatches(id);
  }



  // @Patch(':id') 
  // update(@Param('id') id: string, @Body() updateMatchDto: UpdateMatchDto) {
  //   return this.matchService.update(+id, updateMatchDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.matchService.remove(+id);
  // }
}
