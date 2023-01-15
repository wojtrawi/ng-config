import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { fetchConfig, provideConfig } from './app/config';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    console.log('[main.js]: executed');
  })
  .catch((err) => console.error(err));

// (async function () {
//   const config = await fetchConfig();

//   console.log(`[main.js]: config value ${JSON.stringify(config)}`);

//   platformBrowserDynamic([provideConfig(config)])
//     .bootstrapModule(AppModule)
//     .then(() => {
//       console.log('[main.js]: executed');
//     })
//     .catch((err) => console.error(err));
// })();
