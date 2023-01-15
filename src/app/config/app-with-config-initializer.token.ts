import { APP_INITIALIZER, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const APP_WITH_CONFIG_INITIALIZER = new InjectionToken<
  readonly (() => Observable<unknown>)[]
>('APP_INITIALIZER with sync access to config');
