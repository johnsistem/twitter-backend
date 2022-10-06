//import { Order } from 'src/modules/order/entities/order.entity';
import { Exclude } from 'class-transformer';
import { Follower } from 'src/modules/followers/entities/follower.entity';
import { Tweet } from 'src/modules/tweets/entities/tweet.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,  ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class User {  
  
   @Exclude()
   @Column({ nullable: false, type: 'varchar' })
   password: string;  

  /*  @Column({ nullable: false })
   profilePicture: string;   

   @Column()
   followers: User[];

   @Column()
   following: User[]; */

   //relation with entity Order
   //@OneToMany(() => Order, (order) => order.user)
   //order: Order[]

 //USER=>TWEET
    @OneToMany(() => Tweet, (tweet) => tweet.user)
   tweets: Tweet[] 

   //USER=>FOLLOWER
    @OneToMany(() => Follower, (follower) => follower.user)
   followers: Follower[] 


   //primera funcion apunto a la entidad a la que se va a relacionar y la segunda apunta  al campo
   //que esta relacionado con la entidad que se esta implementando
   // @ManyToOne(() => OrderItem, (orderitem) => orderitem.book, { cascade: true })
   // @JoinColumn({ name: 'editorial_id' })
   // orderItem: OrderItem;

   @CreateDateColumn()
   CreatedAt: Date;
  
}






/* export class User {} */
