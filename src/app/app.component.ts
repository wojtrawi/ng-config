import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { ENVIRONMENT } from './environment.token';
import { LoggerService } from './logger';
import { init } from './store-tmp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-config';

  public readonly environment = inject(ENVIRONMENT);

  private readonly loggerService = inject(LoggerService);
  private readonly store = inject(Store);

  constructor() {
    this.store.dispatch(init({ message: 'Hello from AppComponent' }));
  }

  logMessage(): void {
    this.loggerService.log('Hello from AppComponent');
  }
}
