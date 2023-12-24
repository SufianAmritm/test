import { Body, Controller, Get } from '@nestjs/common';

import { OpeniApiService } from './openi-api.service';

@Controller('open-api')
export class OpenApiController {
  constructor(private openaiService: OpeniApiService) {}
  @Get()
  async getRes(@Body() question: any) {
    return this.openaiService.checkAiResponse(question);
  }
}
