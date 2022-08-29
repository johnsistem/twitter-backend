import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, MaxLength, MinLength } from 'class-validator';
import { LoginAuthDto } from './login-auth.dto';

export class RegisterAuthDto  {
   @MinLength(3)
   @MaxLength(20)
   username: string;

   @IsEmail()
   email: string;

   @MinLength(6)
   @MaxLength(20)
   password: string;
}
