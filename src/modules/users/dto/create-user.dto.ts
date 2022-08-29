import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {
   @IsEmail()
   @IsNotEmpty()
   email: string;

   @IsString()
   @Length(2, 10)
   @IsNotEmpty()
   username: string;

    @IsString()
   @IsNotEmpty()
   password: string; 
}
