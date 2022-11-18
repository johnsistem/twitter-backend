import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, RelationId } from 'typeorm';

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

  //FOLLOW
  async follow(user: User, createFollowerDto: CreateFollowerDto) {
    const { following } = createFollowerDto;
    const { id } = user;
    
    //console.log(following)
    const newFollower = this.followerRepository.create({
     followers: { id },
     following: following
    })
    console.log(newFollower.following)
    console.log(newFollower.followers)
    return await this.followerRepository.save(newFollower)

  }
  
  
   //UNFOLLOW
  async unfollow(user: User, createFollowerDto:CreateFollowerDto) {
    const { id } = user;
    const {following}=createFollowerDto;
    console.log(IDBKeyRange)
    
    const newFollower = await this.followerRepository.findOne({


    })
    return newFollower
   // return await this.followerRepository.remove(newFollower)

  }




//FIND FOLLOWERS
  async findFollowers(user: User): Promise<Followers[]> {
    const { id,username } = user
    return await this.followerRepository.find({

      relations: {        
        followers:{          
        },
        
      },

      where: {
        following: {
          id
        }
      },
      
      select:{
        followers:{
          username:true,
          
        }
      }
    })

  }


//FIND FOLLOWINGS
   async findFollowings(user: User): Promise<Followers[]> {
    const { id } = user
    return await this.followerRepository.find({

      relations: {
        following: true
      },

      where: {
        followers: {
          id
        }
      },
      
      select:{
        following:{
          username:true,
          id:true
        
        }
      }
    })

  } 

//FIND A FOLLOWER
    async findAFollower(id: number){
     const myFollowing=await this.followerRepository.findOne({
        
        relations:{
         following:true 
        },
        where:{
          id:id
        },
        select:{
          following:{
            username:true
          }
        }
               
        
      })
     if (!myFollowing) throw new NotFoundException('Este Id no existe');
        return myFollowing;
    //  return `This action returns a # ${id} followers`;
  
    } 


  /*   findFollowings(id: number) {
      return `This action returns a # ${id} followings`;
  
    } */

  update(id: number, updateFollowerDto: UpdateFollowerDto) {
    return `This action updates a #${id} follower`;
  }

  async remove(id: number) {
    const item = await this.followerRepository.findBy({ id })
    return this.followerRepository.remove(item);
  }
}
