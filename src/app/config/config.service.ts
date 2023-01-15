import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { Config } from './config';

interface ConfigState {
  isLoaded: boolean;
  data: Config | null;
}

const initialState: ConfigState = {
  isLoaded: false,
  data: null,
};

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private readonly state = new BehaviorSubject<ConfigState>(initialState);

  public readonly state$ = this.state.asObservable();
  // Just to show it is not sync for everyone
  public config: Config | null = null;

  constructor(private readonly http: HttpClient) {}

  public load(): Observable<Config> {
    return this.http.get<Config>('assets/config.json').pipe(
      tap((config) => {
        console.log(`[ConfigService]: config value ${JSON.stringify(config)}`);
        this.config = config;
        this.state.next({ isLoaded: true, data: config });
      })
    );
  }
}
