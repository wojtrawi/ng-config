import { APP_INITIALIZER, inject, Provider } from '@angular/core';
import { APP_WITH_CONFIG_INITIALIZER } from '../config';

import { I18nService } from './i18n.service';

export function provideI18nInitializer(): Provider {
  return {
    // provide: APP_INITIALIZER,
    provide: APP_WITH_CONFIG_INITIALIZER,
    multi: true,
    useFactory: () => {
      const i18nService = inject(I18nService);

      return () => i18nService.load();
    },
  };
}
