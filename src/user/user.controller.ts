import { Controller, Body, Param, Delete, Put, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetCurrentUserId } from 'src/common/decorators';
import { log } from 'console';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Put()
  editProfile(
    @GetCurrentUserId() sub: string,
    @Body() userData: UpdateUserDto,
  ) {
    return this.userService.editProfile(sub, userData);
  }

  @Delete()
  deleteProfile(@GetCurrentUserId() sub: string) {
    return this.userService.deleteProfile(sub);
  }


  @Get()
  getCurrentUser(@GetCurrentUserId() sub: string) {
    try {
      console.log("method executed with", sub)
      return this.userService.currentUser(sub)
    } catch (e) {

    }
  }


  @Get('/matches')
  getOwnMatchs(@GetCurrentUserId() sub: string) {
    return this.userService.getOwnMatchs(sub)
  }


  @Get("/match/joined")
  jointedMatches(@GetCurrentUserId() sub: string) {
    return this.userService.getJointedMatches(sub)
  }


}
