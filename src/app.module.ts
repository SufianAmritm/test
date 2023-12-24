import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenApiModule } from './open-api/open-api.module';
import { OpeniApiService } from './open-api/openi-api.service';

@Module({
  imports: [OpenApiModule],
  controllers: [AppController],
  providers: [AppService, OpeniApiService],
})
export class AppModule {}
