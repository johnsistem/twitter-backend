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





   //FIND MY FOLLOWERS
  @UseGuards(JwtAuthGuard)
 @Get('follower')
  findFollowers(@GetUser() user: User) {
    return this.followersService.findFollowers(user);
  }


  //FIND MY FOLLOWINGS
   @UseGuards(JwtAuthGuard)
  @Get('following')
   findFollowings(@GetUser() user: User) {
     return this.followersService.findFollowings(user);
   } 
   

  //⁡⁢⁣⁡⁣⁣⁢FIND A FOLLOWER ID
   @UseGuards(JwtAuthGuard)
   @Delete(':id')
   removeFollowing(@Param('id') id: string) {
   //  return `This action returns a # ${id} follower`;
     return this.followersService.deleteFollowing(+id)
    // return this.followersService.findFollowers(+id);
   } 





//-------------------------------------------------------


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFollowerDto: UpdateFollowerDto) {
    return this.followersService.update(+id, updateFollowerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.followersService.remove(+id);
  }
}