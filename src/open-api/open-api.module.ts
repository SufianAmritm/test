import { Module } from '@nestjs/common';

import { OpenApiController } from './open-api.controller';
import { OpeniApiService } from './openi-api.service';

@Module({
  controllers: [OpenApiController],
  providers: [OpeniApiService],
})
export class OpenApiModule {}
