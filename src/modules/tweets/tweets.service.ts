import { Injectable, NotFoundException, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isEmpty } from 'class-validator';
import { Any } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { User } from '../users/entities/user.entity';
//import { Repository } from 'typeorm';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { Tweet } from './entities/tweet.entity';


@Injectable()
export class TweetsService {
  constructor(
    @InjectRepository(Tweet) private tweetRepository: Repository<Tweet>
  ) { }


  // ⁡⁢⁣⁡⁣⁣⁢AddTweet⁡⁡
  async AddTweet(createTweetDto: CreateTweetDto, user: User): Promise<Tweet> {
    const { content } = createTweetDto;
    const tweet = this.tweetRepository.create({
      content: content,
      user: user
    })
    return this.tweetRepository.save(tweet);

  }

  //⁡⁣⁣⁢GetTweets⁡
  async GetTweets(user: User): Promise<Tweet[]> {
    const tweets = await this.tweetRepository.find({
      select: ['id', 'content'],
      where: {
        user: {
          id: user.id,
        }
      },
    })
    
   // if(tweets[0]) throw new NotFoundException(404,"not found");
    
    return tweets
  }


 //FIND A TWEET
  async findOne(id: number) {
   // return `This action returns a #${id} tweet`;
  const item=await this.tweetRepository.findBy({id})
  return item;
  }


  //UPDATE TWEET
  async update(id: number, updateTweetDto: UpdateTweetDto){
   const {content}=updateTweetDto
   const tweet=await this.tweetRepository.findBy({id})
   return tweet
  
  //return item;
  }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
}
