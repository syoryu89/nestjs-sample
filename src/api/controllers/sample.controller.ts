import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  SampleFindAllRequest,
  SampleFindAllResponse,
} from 'src/application/services/sample/sample-find-all.dto';
import { SampleFindAllService } from 'src/application/services/sample/sample-find-all.service';

@ApiTags('sample')
@Controller('sample')
export class SampleController {
  constructor(private readonly findAllService: SampleFindAllService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({
    summary: 'サンプル',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: SampleFindAllResponse,
  })
  findAll(@Query() request: SampleFindAllRequest): SampleFindAllResponse {
    return this.findAllService.handle(request);
  }
}
