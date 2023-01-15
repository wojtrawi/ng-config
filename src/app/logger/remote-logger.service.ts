import { Injectable } from '@angular/core';

import { Config, Configurable } from '../config';
import { LoggerService } from './logger.service';

@Injectable()
export class RemoteLoggerService implements LoggerService, Configurable {
  constructor() {
    console.log('[RemoteLoggerService]: created');
    // this.initialize();
  }

  log(message: string): void {
    // Call to monitoring service e.g. Sentry
    console.log(`[RemoteLoggerService]: ${message}`);
  }

  initialize(): void {
    // TODO: Implement me
    console.log('[RemoteLoggerService]: initialize placeholder');
  }

  configure(config: Config): void {
    console.log(
      `[RemoteLoggerService]: configure called with ${JSON.stringify(config)}`
    );
  }
}
