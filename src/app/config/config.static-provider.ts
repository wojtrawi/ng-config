import { StaticProvider } from '@angular/core';

import { Config } from './config';
import { CONFIG } from './config.token';

export function fetchConfig(): Promise<Config> {
  return fetch('assets/config.json').then((res) => res.json());
}

export function provideConfig(config: Config): StaticProvider {
  return {
    provide: CONFIG,
    useValue: config,
  };
}
