import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TweetsModule } from './modules/tweets/tweets.module';

@Module({
  imports: [
    UsersModule,
    TweetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
