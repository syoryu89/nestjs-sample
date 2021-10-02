import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller()
export class AliveController {
  @Get('alive')
  @HttpCode(204)
  @ApiExcludeEndpoint()
  alive(): string {
    return 'Success';
  }
}
