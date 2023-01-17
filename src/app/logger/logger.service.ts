import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConcreteLoggerService } from './concrete-logger.service';

import { LocalLoggerService } from './local-logger.service';
import { RemoteLoggerService } from './remote-logger.service';

@Injectable({
  providedIn: 'root',
  useClass: environment.production ? RemoteLoggerService : LocalLoggerService,
  // useFactory: () =>
  //   environment.production
  //     ? new RemoteLoggerService()
  //     : new LocalLoggerService(),
  // useFactory: () => {
  //   switch (environment.production) {
  //     case true: {
  //       return new RemoteLoggerService();
  //     }
  //     case false: {
  //       return new LocalLoggerService();
  //     }
  //   }
  // },
  // useClass: ConcreteLoggerService,
})
export abstract class LoggerService {
  abstract log(message: string): void;
}
