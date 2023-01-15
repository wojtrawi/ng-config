import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';

@Injectable()
export class RemoteLoggerService implements LoggerService {
  log(message: string): void {
    // Call to monitoring service e.g. Sentry
    console.log(`[RemoteLoggerService]: ${message}`);
  }
}
