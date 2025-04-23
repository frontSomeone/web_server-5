import { Body, Controller, Post, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { InfoUserDto, ResultInfoUserDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }

  @Post()
  async getUser(@Body() data: InfoUserDto): Promise<ResultInfoUserDto> {
    return await this.appService.getUserInfo(data);
  }
}
