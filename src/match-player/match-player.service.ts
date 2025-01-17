import { HttpException, HttpStatus, Injectable, Param, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MatchPlayer } from './entities/match-player.entity';
import { isValidObjectId, Model } from 'mongoose';
import { Match } from 'src/match/entities/match.entity';
import { UserModule } from 'src/user/user.module';
import { User } from 'src/user/entities/user.entity';
import { MatchPlayerModule } from './match-player.module';

@Injectable()
export class MatchPlayerService {
  constructor(
    @InjectModel(MatchPlayer.name) private matchPLayerModel: Model<MatchPlayer>,
    @InjectModel(Match.name) private matchModel: Model<Match>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) { }

  async joinMatch(param, userId: string, isAccepted: boolean = false) {

    if (!isValidObjectId(param.matchId)) {
      throw new HttpException(
        'Key of match not valid',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const isMatchExists = await this.matchModel.findById(param.matchId, "_id playersOfMatch").exec();

    if (isMatchExists == null) {
      throw new HttpException(
        'Match Not exists',
        HttpStatus.NOT_FOUND,
      );
    }

    const playerAlreadyJoined = await this.matchPLayerModel.findOne({
      matchId: param.matchId,
      userId,
    });
    if (playerAlreadyJoined) {
      throw new HttpException(
        'You have already joined this match',
        HttpStatus.CONFLICT,
      );
    }


    const players = isMatchExists.playersOfMatch.length

    if (players == 9)
      throw new HttpException("match full of players", HttpStatus.BAD_REQUEST)



    const match = await this.matchPLayerModel.create({
      matchId: param.matchId,
      userId,
      isAccepted,
    });



    await this.matchModel.findByIdAndUpdate(param.matchId, {
      $push: { playersOfMatch: match._id }
    })


    await this.userModel.findByIdAndUpdate(userId, {
      $push: { jointedMatch: match._id }
    })

    return await match.populate("userId");
  }

  async findMyMatchPlayer(userId: string) {
    const matchPlayer = await this.matchPLayerModel
      .find({})
      .populate('matchId')
      .populate({ path: 'userId', select: 'email name last_name phone' })
      .exec();

    const myMatchPlayer = matchPlayer.filter(
      (m) => m.matchId.userId.toString() === userId,
    );
    return myMatchPlayer;
  }

  async findJoinedMatchById(id: String) {
    try {

      return await this.matchPLayerModel.findById(id, "-createdAt -updatedAt")
        .populate({ path: "matchId", select: "-createdAt -updatedAt" })
        .exec();
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async findAllMatchPlayer() {
    const matchPlayer = await this.matchPLayerModel
      .find({})

      .populate('matchId')
      .populate({ path: 'userId', select: 'email name last_name phone' })
      .exec();

    return matchPlayer;
  }

  async acceptePlayerOfMatch(
    userId: string, playerOfMatchId: string
  ) {

    // get playerMatchId with match => check if user ownId of match the current user =>  => accepte 

    const matchPlayer = await this.matchPLayerModel.findById(playerOfMatchId, "-createdAt -updatedAt").populate({ path: "matchId", select: "userId" })
    console.log(matchPlayer)
    if (matchPlayer == null) {
      throw new HttpException("Request not exists", HttpStatus.BAD_REQUEST)
    }
    if (matchPlayer.matchId.userId.toString() != userId) {
      throw new HttpException("Unauthorized request, your are not the owner of the match", HttpStatus.UNAUTHORIZED)
    }
    if (matchPlayer.isAccepted) {
      throw new HttpException("Request already accpeted", HttpStatus.BAD_REQUEST)
    }

    matchPlayer.isAccepted = true
    return await matchPlayer.save()

  }


  async refusePlayerOfMatch(
    userId: string, playerOfMatchId: string
  ) {

    // get playerMatchId with match => check if user ownId of match the current user =>  => check request not accpeted then delete 

    const matchPlayer = await this.matchPLayerModel.findById(playerOfMatchId, "-createdAt -updatedAt").populate({ path: "matchId", select: "userId" })
    console.log(matchPlayer)
    if (matchPlayer == null) {
      throw new HttpException("Request Not Found", HttpStatus.BAD_REQUEST)
    }

    if (matchPlayer.matchId.userId.toString() != userId) {
      throw new HttpException("Unauthorized request, your are not the owner of the match", HttpStatus.UNAUTHORIZED)
    }
    if (matchPlayer.isAccepted) {
      throw new HttpException("Request already accpeted", HttpStatus.BAD_REQUEST)
    }

    return matchPlayer.deleteOne()

  }



  async cancelRequet(
    userId: string, playerOfMatchId: string
  ) {

    // get playerMatchId with match => check if user ownId of match the current user =>  => check request not accpeted then delete 

    const matchPlayer = await this.matchPLayerModel.findById(playerOfMatchId, "-createdAt -updatedAt");

    if (matchPlayer == null) {
      throw new HttpException("Request Not Found", HttpStatus.BAD_REQUEST)
    }

    if (matchPlayer.userId.toString() != userId) {
      throw new HttpException("Unauthorized request, You're not the owner of the request to cancel it", HttpStatus.UNAUTHORIZED)
    }

    if (matchPlayer.isAccepted) {
      throw new HttpException("Request already accpeted", HttpStatus.BAD_REQUEST)
    }

    // begin the proccess of deletion

    await this.userModel.findByIdAndUpdate(userId, {
      $pull: { jointedMatch: matchPlayer._id }
    });



    await this.matchModel.findByIdAndUpdate(matchPlayer.matchId, {
      $pull: { playersOfMatch: matchPlayer._id }
    });

    return matchPlayer.deleteOne()

  }


  // findOne(id: number) {
  //   return `This action returns a #${id} matchPlayer`;
  // }

  // update(id: number, updateMatchPlayerDto: UpdateMatchPlayerDto) {
  //   return `This action updates a #${id} matchPlayer`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} matchPlayer`;
  // }
}
