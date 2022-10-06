import { IsNotEmpty, IsString } from "class-validator";

export class GetTweetFilterDto {
   @IsString()   
   content: string;

}