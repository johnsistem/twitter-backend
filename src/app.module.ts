import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TweetsModule } from './modules/tweets/tweets.module';
//import { PostgresModule } from 'nest-postgres';
import { AuthModule } from './modules/auth/auth.module';
import { FollowersModule } from './modules/followers/followers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
     // connectionString: 'postgresql://postgres:pass123@localhost:5432/nest',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
     username: 'root',
     password: "root",
     database: 'twitterdb',
     /*  username: 'postgres',
      password: 'mysecretpassword', */      
       
     autoLoadEntities: true,
      synchronize: true,//es solo en modo de desarrollo
     entities: ['dist/**/*.entity.js'],
     // migrations: ['dist/database/migrations/*.js'],

    }),
    UsersModule,
    TweetsModule,
    AuthModule,
    FollowersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
