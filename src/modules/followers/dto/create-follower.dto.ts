import { IsNumber } from "class-validator";
import { User } from "src/modules/users/entities/user.entity";

export class CreateFollowerDto {
   follower: User;
   following: User;
}


