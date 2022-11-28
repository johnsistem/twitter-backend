import { Retweet } from "src/modules/retweets/entities/retweet.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Tweet {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 150 })
  content: string;

  /*  @Column({ nullable: false })
   author: User; */

  // @Column()
  //  retweets: Tweet[]; 

  // @ManyToOne(() => OrderItem, (orderitem) => orderitem.book, { cascade: true })
  // @JoinColumn({ name: 'editorial_id' })

  //@ManyToOne(() => User, (user) => user.tweets, { eager: true }) "eager":regresa los campos relacionados
  @ManyToOne(() => User, (user) => user.tweets, { cascade: true })
  user: User;

  //TWEET=>RETWEET
  @OneToMany(() => Retweet, (retweet) => retweet.retweet)
  retweet: Retweet[]

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  CreatedAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}
