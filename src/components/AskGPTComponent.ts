import { Component, BaseComponent, Intents } from '@jovotech/framework';

import { GPTOutput } from '../output/GPTOutput';
import { getGPTResponse } from '../utils/gpt';

@Component()
export class AskGPT extends BaseComponent {
  START() {
    return this.$send(GPTOutput, { message: 'What would you like to know?' });
  }

  @Intents('AskIntent')
  async ask() {
    const response = await getGPTResponse(this.$entities.question?.value as string);
    return this.$send({ message: response, listen: true });
  }

  async UNHANDLED() {
    return this.$send({ message: 'I did not understand', listen: true });
  }

  END() {
    return this.$send({ message: 'Goodbye!', listen: false, shouldEndSession: true });
  }
}
