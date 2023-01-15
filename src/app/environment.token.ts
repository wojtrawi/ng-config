import { InjectionToken } from '@angular/core';

import { environment } from 'src/environments/environment';

export interface EnvironmentData {
  production: boolean;
}

export const ENVIRONMENT = new InjectionToken<EnvironmentData>(
  'environment file',
  {
    providedIn: 'root',
    factory: () => environment,
  }
);
