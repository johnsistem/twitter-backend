import { PartialType } from '@nestjs/mapped-types';
import { MaxLength, MinLength } from 'class-validator';
import { LoginAuthDto } from './login-auth.dto';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
   @MinLength(3)
   @MaxLength(20)
   name: string;
}
