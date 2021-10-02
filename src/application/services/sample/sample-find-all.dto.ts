import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class SampleFindAllRequest {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  userName: string;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  userId?: number;
}

export class SampleFindAllResponseUser {
  @ApiProperty()
  userName: string;

  @ApiPropertyOptional()
  userId?: number;
}

export class SampleFindAllResponse {
  @ApiProperty({ type: [SampleFindAllResponseUser] })
  users: SampleFindAllResponseUser[];
}
