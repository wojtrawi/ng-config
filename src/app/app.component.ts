import { Component, inject } from '@angular/core';
import { LoggerService } from './logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-config';

  private readonly loggerService = inject(LoggerService);

  logMessage(): void {
    this.loggerService.log('Hello from AppComponent');
  }
}
