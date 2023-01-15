import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CONFIG } from './config';

import { ENVIRONMENT } from './environment.token';
import { LoggerService } from './logger';
import { init } from './store-tmp';
import { TARGET } from './target.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-config';

  public readonly environment = inject(ENVIRONMENT);
  public readonly target = inject(TARGET);
  public readonly config = inject(CONFIG);

  private readonly loggerService = inject(LoggerService);
  private readonly store = inject(Store);

  constructor() {
    console.log('[AppComponent]: created');
    this.store.dispatch(init({ message: 'Hello from AppComponent' }));
  }

  logMessage(): void {
    this.loggerService.log('Hello from AppComponent');
  }
}
