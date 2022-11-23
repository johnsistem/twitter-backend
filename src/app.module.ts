import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';

import { AppController } from './app.controller';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import config from './config/index';

import { UsersModule } from './modules/users/users.module';
import { TweetsModule } from './modules/tweets/tweets.module';
//import { PostgresModule } from 'nest-postgres';
import { AuthModule } from './modules/auth/auth.module';
import { FollowersModule } from './modules/followers/followers.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    UsersModule,
    TweetsModule,
    AuthModule,
    FollowersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
