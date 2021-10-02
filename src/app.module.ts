import { Module } from '@nestjs/common';
import { controllers } from './api/controllers';
import { applicationServices } from './application/services';

@Module({
  imports: [],
  controllers: [...controllers],
  providers: [...applicationServices],
})
export class AppModule {}
