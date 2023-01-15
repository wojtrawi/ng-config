import { inject, Injectable } from '@angular/core';
import { exhaustMap, first, map, Observable, timer } from 'rxjs';

import { ConfigService } from '../config';

type Translations = string[];

const mockTranslations: Translations = ['foo', 'bar', 'baz'];

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private readonly configService = inject(ConfigService);

  public load(): Observable<Translations> {
    const config = this.configService.config;
    console.log(`[I18nService]: config value ${JSON.stringify(config)}`);

    return timer(2000).pipe(map(() => mockTranslations));
  }

  // public load(): Observable<Translations> {
  //   return this.configService.state$.pipe(
  //     first((config) => config.isLoaded),
  //     exhaustMap(({ data }) => {
  //       console.log(`[I18nService]: config value ${JSON.stringify(data)}`);

  //       return timer(2000).pipe(map(() => mockTranslations));
  //     })
  //   );
  // }
}
