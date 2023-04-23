import { Component, BaseComponent, Global } from '@jovotech/framework';
import { AskGPT } from './AskGPTComponent';

@Global()
@Component()
export class GlobalComponent extends BaseComponent {
  LAUNCH() {
    return this.$redirect(AskGPT);
  }
}
