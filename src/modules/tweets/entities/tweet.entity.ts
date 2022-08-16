import { User } from "src/modules/users/entities/user.entity";
import { Column, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Tweet {
   @PrimaryGeneratedColumn('increment')
   id: number;

   @Column({ nullable: false })
   body: string;

   @Column({ nullable: false })
   author: User;

   @Column()
   retweets: Tweet[];

  // @ManyToOne(() => OrderItem, (orderitem) => orderitem.book, { cascade: true })
  // @JoinColumn({ name: 'editorial_id' })
   @ManyToOne(() => User, (user) => user.tweet, { cascade: true })
    user: User;

   @CreateDateColumn()
   CreatedAt: Date;
}
