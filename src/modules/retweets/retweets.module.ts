import { Module } from '@nestjs/common';
import { RetweetsService } from './retweets.service';
import { RetweetsController } from './retweets.controller';

@Module({
  controllers: [RetweetsController],
  providers: [RetweetsService]
})
export class RetweetsModule {}
