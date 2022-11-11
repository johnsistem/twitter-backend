import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
//import { User } from './entities/user.entity';
import { Request } from 'express';
import { GetUser } from '../users/decorators/user.decorator';
import { User } from './entities/user.entity';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  //GET ALL TWEETS OF USER
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    //const user: User = <User>req.user;
    // const user=req.user.id;
    // const usercurrent=await this.usersService.findOne(user.id)
    //console.log(usercurrent)
    // const userid=this.usersService.findOne(user.id)
    return this.usersService.findAll()
    //return usercurrent
  }




  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
    //return `User id:${id}`
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
