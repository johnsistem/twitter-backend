import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TweetsModule } from './modules/tweets/tweets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'docker',
     /*  username: 'postgres',
      password: 'mysecretpassword', */      
       database: 'twitterdb', 
      autoLoadEntities: true,
      synchronize: true,//es solo en modo de desarrollo
      entities: ['dist/**/*.entity.js'],
      // migrations: ['dist/database/migrations/*.js'],

    }),
    UsersModule,
    TweetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
