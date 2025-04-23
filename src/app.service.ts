import { Injectable } from '@nestjs/common';
import { InfoUserDto, ResultInfoUserDto } from './app.dto';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    return 'Hey, nice to see you';
  }

  async getUserInfo(data: InfoUserDto): Promise<ResultInfoUserDto> {
    return {
      userInfo: data.name + ' ' + data.age,
      phone: data.region + data.number,
    };
  }
}
