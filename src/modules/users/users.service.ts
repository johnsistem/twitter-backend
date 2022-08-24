import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request, response, Response } from 'express';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
   constructor(
    @InjectRepository(User) private userRepository:Repository<User>
  ){} 

  //create user
  create(createUserDto: CreateUserDto) {
    
    const newUser=this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser)
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    //return `This action removes a #${id} user`;
    const user = await this.userRepository.findBy({
      id:id
    })

    if (user) {
      
      this.userRepository.remove(user)
      return `the user id  ${id} has been deleted`
    } else {
      //throw new Error("error");
      throw new NotFoundException("Resource not found")
      
    }
    
   
    
  }
  
}
