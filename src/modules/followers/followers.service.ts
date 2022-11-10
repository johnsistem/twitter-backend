import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import { Followers } from './entities/follower.entity';
import { User } from '../users/entities/user.entity';
//import { Followers } from 'src/modules/followers/entities/follower.entity';

@Injectable()
export class FollowersService {

  constructor(
    @InjectRepository(Followers) private followerRepository: Repository<Followers>
  ) { }

//CREATE Follower
  async create(user: User,createFollowerDto: CreateFollowerDto){
    const { following } = createFollowerDto;
    const { id } = user;
    //console.log(following)
    const newFollower = this.followerRepository.create({
      follower: { id },
      following:following
    })
    console.log(newFollower.following)
    console.log(newFollower.follower)
   return await this.followerRepository.save(newFollower)
   
  }

  findAll() {
    return `This action returns all followers`;
  }

  findOne(id: number) {
    return `This action returns a # ${id} follower`;
  }

  update(id: number, updateFollowerDto: UpdateFollowerDto) {
    return `This action updates a #${id} follower`;
  }

  remove(id: number) {
    return `This action removes a #${id} follower`;
  }
}
