import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OpeniApiService {
  private openAi: OpenAI;
  constructor() {
    this.openAi = new OpenAI({
      apiKey: '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',
    });
  }
  async checkAiResponse(question: any) {
    const res = await this.openAi.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: question.question }],
    });
    res.choices[0].message;
  }
}
