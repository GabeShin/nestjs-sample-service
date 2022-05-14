import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { delay, of } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('get');
    return this.appService.getHello();
  }

  @MessagePattern({ role: 'test', cmd: 'create' })
  createTest(): string {
    return 'created item';
  }

  @MessagePattern({ role: 'test', cmd: 'get' })
  getTest(): string {
    return 'get item';
  }

  @MessagePattern({ cmd: 'ping' })
  ping(_: any) {
    // return of('pong').pipe(delay(1000));
    return { ok: true, message: 'pingpong user service' };
  }
}
