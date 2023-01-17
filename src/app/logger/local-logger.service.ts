import { inject, Injectable } from '@angular/core';
import { first, map } from 'rxjs';

import { Config, ConfigService, Configurable } from '../config';
import { LoggerService } from './logger.service';

@Injectable()
export class LocalLoggerService implements LoggerService, Configurable {
  private readonly configService = inject(ConfigService);

  constructor() {
    console.log('[LocalLoggerService]: created');
    this.initialize();
  }

  log(message: string): void {
    console.log(`[LocalLoggerService]: ${message}`);
  }

  initialize(): void {
    const syncConfig = this.configService.config;
    console.log(
      `[LocalLoggerService]: syncConfig ${JSON.stringify(syncConfig)}`
    );

    this.configService.state$
      .pipe(
        first((config) => config.isLoaded),
        map(({ data }) => data)
      )
      .subscribe((config) => {
        console.log(
          `[LocalLoggerService]: asyncConfig ${JSON.stringify(config)}`
        );
      });
  }

  configure(config: Config): void {
    console.log(
      `[LocalLoggerService]: configure called with ${JSON.stringify(config)}`
    );
  }
}
