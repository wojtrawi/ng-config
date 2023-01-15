import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';

@Injectable()
export class LocalLoggerService implements LoggerService {
  log(message: string): void {
    console.log(`[LocalLoggerService]: ${message}`);
  }
}
