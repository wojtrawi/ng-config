import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CONFIG, ConfigService } from './config';

import { ENVIRONMENT } from './environment.token';
import { LoggerService } from './logger';
import { init } from './store-tmp';
import { TARGET } from './target.token';
import { UserInfoService } from './user-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-config';

  public readonly environment = inject(ENVIRONMENT);
  public readonly target = inject(TARGET);
  public readonly config = inject(CONFIG, { optional: true });

  private readonly configService = inject(ConfigService);
  private readonly userInfoService = inject(UserInfoService);
  private readonly loggerService = inject(LoggerService);
  private readonly store = inject(Store);

  public readonly configState$ = this.configService.state$;
  public readonly userInfoState$ = this.userInfoService.state$;

  constructor() {
    console.log('[AppComponent]: created');
    this.store.dispatch(init({ message: 'Hello from AppComponent' }));
    this.userInfoService.load().subscribe();
  }

  logMessage(): void {
    this.loggerService.log('Hello from AppComponent');
  }
}
