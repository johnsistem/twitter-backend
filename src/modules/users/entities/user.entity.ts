//import { Order } from 'src/modules/order/entities/order.entity';
import { Tweet } from 'src/modules/tweets/entities/tweet.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
   @PrimaryGeneratedColumn('increment')
   id: number;

   @Column({ nullable: false })
   username: string;

   @Column({ nullable: false })
   email: string;

   @Column({ nullable: false })
   firstName: string;

   @Column({ nullable: false })
   lastName: string;

  @Column({ nullable: false })
   password: string; 

   @Column({ nullable: false })
   profilePicture: string;   

   @Column()
   followers: User[];

   @Column()
   following: User[];

   //relation with entity Order
   //@OneToMany(() => Order, (order) => order.user)
   //order: Order[]
   @OneToMany(() => Tweet, (tweet) => tweet.user)
   tweet: Tweet[]


   //primera funcion apunto a la entidad a la que se va a relacionar y la segunda apunta  al campo
   //que esta relacionado con la entidad que se esta implementando
   // @ManyToOne(() => OrderItem, (orderitem) => orderitem.book, { cascade: true })
   // @JoinColumn({ name: 'editorial_id' })
   // orderItem: OrderItem;

   @CreateDateColumn()
   CreatedAt: Date;
  
}






/* export class User {} */
