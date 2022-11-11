import { HttpStatus, Injectable, NotFoundException, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RelationId, Repository } from 'typeorm';
import { Request, response, Response } from 'express';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { LoginAuthDto } from '../auth/dto/login-auth.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) { }

  //create user
  create(createUserDto: CreateUserDto) {

    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser)
  }

  async findAll() {
    // const user: User = <User>req.user;
    const users = await this.userRepository.find()
    return users

  }



  async findOne(id: number) {
    //console.log('id',id)
    const user = await this.userRepository.findOne({
      where: {
        id
      }
    })
    console.log('userr:', user.id)
    return user
  }


  /*   async findOne(userLoginAuthDto: LoginAuthDto):Promise<User>{
      const {email } = userLoginAuthDto
      const user = await this.userRepository.findOne({ where: { email } })
      return user
    } */



  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    //return `This action removes a #${id} user`;
    const user = await this.userRepository.findBy({
      id: id
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
