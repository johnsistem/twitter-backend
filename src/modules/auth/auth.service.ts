import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import{compare,genSalt,hash} from 'bcrypt'
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';

//import { UsersService } from '../users/users.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';

@Injectable()
export class AuthService {
 
  //private readonly eventEmitter: EventEmitter2
  constructor(
    private readonly jwtService: JwtService,
  @InjectRepository(User)
  private readonly userRepository: Repository<User>
  ){}


  public async login(userLoginBody: LoginAuthDto) {
    const {email, password } = userLoginBody;

    const userExist = await this.userRepository.findOne({ where: { email } } )
    if (!userExist) throw new HttpException('USER_NOT_FOUND', 404);

    const isCheck = await compare(password, userExist.password);
    if (!isCheck)
      throw new HttpException('PASSWORD_INCORRECT', 403);
    
    const payload={id:userExist.id,username:userExist.username}
    const token = this.jwtService.sign(payload);
    
    const data = {
      user: userExist,
      token
    }
    return data;

   // const userFlat = userExist.toObject();
  //  delete userFlat.password;

   /*  const payload = {
      id: userFlat._id,
    }; */

 /*    const token = this.jwtService.sign(payload);
 
    const data = {
      token,
      user: userFlat,
    };
    this.eventEmitter.emit('user.login', data);

    return data;  */
  }

  public async register(userBody: RegisterAuthDto) {
    const { password, ...user } = userBody;

    const plainToHash = await hash(password, 10)
    userBody = { ...userBody, password: plainToHash }
  const newUser= this.userRepository.create(userBody)
    return await this.userRepository.save(newUser)
//return 'register saved'
    /* const userParse = {
      ...user,
      password: await generateHash(password),
    }; */

    //const newUser = await this.userModel.create(userParse);

    /**
     * Enviar (evento) de email
     */

    //this.clientMailService.emit('user.created', newUser);

   // return newUser;
  }

  
}


