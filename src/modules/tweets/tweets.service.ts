import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
//import { Repository } from 'typeorm';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { Tweet } from './entities/tweet.entity';

@Injectable()
export class TweetsService {
   constructor(
    @InjectRepository(Tweet) private tweetRepository: Repository<Tweet>
  ) { } 


  async create(createTweetDto: CreateTweetDto) {
        
    //const { content } = createTweetDto;
    const tweet = this.tweetRepository.create(createTweetDto)
      return this.tweetRepository.save(tweet); 
    
    
  
  }

  findAll() {
    return `This action returns all tweets`;
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
