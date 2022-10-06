import { User } from "src/modules/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tweet {
   @PrimaryGeneratedColumn('increment')
   id: number;

   @Column({ nullable: false })
   content: string;

  /*  @Column({ nullable: false })
   author: User; */

  /*  @Column()
   retweets: Tweet[]; */

  // @ManyToOne(() => OrderItem, (orderitem) => orderitem.book, { cascade: true })
  // @JoinColumn({ name: 'editorial_id' })
   
   //@ManyToOne(() => User, (user) => user.tweets, { eager: true }) "eager":regresa los campos relacionados
   @ManyToOne(() => User, (user) => user.tweets, { cascade: true })
    user: User; 

   @CreateDateColumn()
   CreatedAt: Date;
}
