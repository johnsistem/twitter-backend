import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Follower {

   @PrimaryGeneratedColumn('increment')
   id: number;

   @Column({ nullable: false, type: 'varchar' })
   username: string;

   @Column({ nullable: false, type: 'varchar' })
   email: string;

   @ManyToOne(() => User, (user) => user.followers, { cascade: true })
   user: User;
}








