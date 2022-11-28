import { Test, TestingModule } from '@nestjs/testing';
import { RetweetsController } from './retweets.controller';
import { RetweetsService } from './retweets.service';

describe('RetweetsController', () => {
  let controller: RetweetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RetweetsController],
      providers: [RetweetsService],
    }).compile();

    controller = module.get<RetweetsController>(RetweetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
