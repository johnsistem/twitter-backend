import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { FollowersService } from './followers.service';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import { GetUser } from '../users/decorators/user.decorator';
import { User } from '../users/entities/user.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import * as request from 'supertest';

@Controller('followers')
export class FollowersController {
  constructor(private readonly followersService: FollowersService) { }



//CREATE FOLLOW
  @UseGuards(JwtAuthGuard)
  @Post('follow')
  follow(@GetUser() user: User, @Body() createFollowerDto: CreateFollowerDto) {

    //console.log(following)
    //return `This action returns a # ${request} follower`;
    return this.followersService.follow(user, createFollowerDto);
  }


//UNFOLLOW
  @UseGuards(JwtAuthGuard)
  @Post('unfollow')
  unfollow(@GetUser() user: User, @Body() createFollowerDto: CreateFollowerDto) {
//const idunfollow=createFollowerDto
    //console.log(following)
   // return `This action returns unfollow`;
    return this.followersService.unfollow(user, createFollowerDto);
  }


   //FIND FOLLOWER
  @UseGuards(JwtAuthGuard)
 @Get('follower')
  findFollowers(@GetUser() user: User) {
    return this.followersService.findFollowers(user);
  }


  //FIND FOLLOWING
   @UseGuards(JwtAuthGuard)
  @Get('following')
   findFollowings(@GetUser() user: User) {
     return this.followersService.findFollowings(user);
   } 
   

  //⁡⁢⁣⁡⁣⁣⁢UNFOLLOWER ID
   @UseGuards(JwtAuthGuard)
   @Get(':id')
   getFollowers(@Param('id') id: string) {
     return this.followersService.findAFollower(+id)
    // return this.followersService.findFollowers(+id);
   } 


  //⁡⁢⁣⁡⁣⁣⁢Followings⁡⁡
  /* @UseGuards(JwtAuthGuard)
  @Get(':id')
  getFollowing(@Param('id') id: string) {
    return this.followersService.findFollowings(+id);
  } */

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFollowerDto: UpdateFollowerDto) {
    return this.followersService.update(+id, updateFollowerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.followersService.remove(+id);
  }
}