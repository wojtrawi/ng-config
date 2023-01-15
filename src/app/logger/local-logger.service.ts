import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';

@Injectable()
export class LocalLoggerService implements LoggerService {
  constructor() {
    console.log('[LoggerService]: created');
  }

  log(message: string): void {
    console.log(`[LocalLoggerService]: ${message}`);
  }
}
