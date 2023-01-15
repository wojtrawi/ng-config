import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store-tmp';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { WITH_CONFIG, provideConfigInitializer } from './config';
import { LoggerService } from './logger';
import { provideI18nInitializer } from './i18n';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ app: reducer }, {}),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25,
    //   logOnly: environment.production,
    // }),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [
    provideConfigInitializer(),
    provideI18nInitializer(),
    {
      provide: WITH_CONFIG,
      multi: true,
      useExisting: LoggerService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('[AppModule]: created');
  }
}
