import { APP_INITIALIZER, inject, Provider } from '@angular/core';
import { tap } from 'rxjs';

import { LoggerService } from '../logger';
import { ConfigService } from './config.service';
import { WITH_CONFIG } from './with-config.token';

export function provideConfigInitializer(): Provider {
  return {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: () => {
      const configService = inject(ConfigService);
      // Requesting service triggers its creation
      const loggerService = inject(LoggerService);
      // Calling configure when config is present
      const configurableServices = inject(WITH_CONFIG);

      // return () => configService.load();

      return () =>
        configService.load().pipe(
          tap((config) => {
            for (let service of configurableServices) {
              service.configure(config);
            }
          })
        );
    },
  };
}
