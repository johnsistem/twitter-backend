import { Tweet } from "src/modules/tweets/entities/tweet.entity";
import { User } from "src/modules/users/entities/user.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Retweet {
   @PrimaryGeneratedColumn('increment')
   id: number;

   @ManyToOne(() => User, (user) => user.retweet)
   @JoinColumn({ name: "user_id" })
   user: User;

   @ManyToOne(() => Tweet, (retweet) => retweet.retweet)
   @JoinColumn({ name: "tweet_id" })
   retweet: Tweet;


   @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
   CreatedAt: Date;

   @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
   updatedAt: Date;
}
