import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';

@Injectable()
export class AuthService {

  public async login(userLoginBody: LoginAuthDto) {
    const { password } = userLoginBody;

    /* const userExist = await this.userModel.findOne({
      email: userLoginBody.email,
    });
    if (!userExist) throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    const isCheck = await compareHash(password, userExist.password);
    if (!isCheck)
      throw new HttpException('PASSWORD_INVALID', HttpStatus.CONFLICT);

    const userFlat = userExist.toObject();
    delete userFlat.password;

    const payload = {
      id: userFlat._id,
    };

    const token = this.jwtService.sign(payload);

    const data = {
      token,
      user: userFlat,
    };
    this.eventEmitter.emit('user.login', data);

    return data; */
  }

  public async register(userBody: RegisterAuthDto) {
    const { password, ...user } = userBody;

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
