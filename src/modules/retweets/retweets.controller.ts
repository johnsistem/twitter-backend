import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RetweetsService } from './retweets.service';
import { CreateRetweetDto } from './dto/create-retweet.dto';
import { UpdateRetweetDto } from './dto/update-retweet.dto';

@Controller('retweets')
export class RetweetsController {
  constructor(private readonly retweetsService: RetweetsService) {}

  @Post()
  create(@Body() createRetweetDto: CreateRetweetDto) {
    return this.retweetsService.create(createRetweetDto);
  }

  @Get()
  findAll() {
    return this.retweetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.retweetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRetweetDto: UpdateRetweetDto) {
    return this.retweetsService.update(+id, updateRetweetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.retweetsService.remove(+id);
  }
}
