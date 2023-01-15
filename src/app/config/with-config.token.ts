import { InjectionToken } from '@angular/core';

import { Configurable } from './configurable';

export const WITH_CONFIG = new InjectionToken<Configurable[]>(
  'Configurable services'
);
