import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Followers {

   @PrimaryGeneratedColumn('increment')
   id: number;


   @ManyToOne(() => User, (user) => user.followers, { cascade: true })
   @JoinColumn({ name: "follower_id" })
   follower: User;

   @ManyToOne(() => User, (user) => user.followers, { cascade: true })
   @JoinColumn({ name: "following_id" })
   following: User;

}









