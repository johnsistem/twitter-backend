import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseInterceptors, ClassSerializerInterceptor, UseGuards, Query } from '@nestjs/common';
import { Request } from 'express';
import { TweetsService } from './tweets.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Tweet } from './entities/tweet.entity';
import { GetUser } from '../users/decorators/user.decorator';
import { GetTweetFilterDto } from './dto/get-tweet-filter-dto';
import { User } from '../users/entities/user.entity';

@Controller('tweets')
  
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @UseGuards(JwtAuthGuard) 
  @Post()
  create(@GetUser() user:User,@Body() createTweetDto: CreateTweetDto): Promise<Tweet> {
    return this.tweetsService.AddTweet(createTweetDto,user);
  }
  
  

  @UseGuards(JwtAuthGuard)
  @Get()   
  findAll(@Req() req:Request) {
    const user: User = <User>req.user;
  console.log(req.user)
    return this.tweetsService.GetTweets(user);
  }






  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tweetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTweetDto: UpdateTweetDto) {
    return this.tweetsService.update(+id, updateTweetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tweetsService.remove(+id);
  }
}
