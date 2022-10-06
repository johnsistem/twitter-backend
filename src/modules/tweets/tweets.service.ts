import { Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
    return tweets
  }






  findOne(id: number) {
    return `This action returns a #${id} tweet`;
  }

  update(id: number, updateTweetDto: UpdateTweetDto) {
    return `This action updates a #${id} tweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
}
