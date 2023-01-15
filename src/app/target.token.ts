import { inject, InjectionToken } from '@angular/core';

import { ENVIRONMENT } from './environment.token';

class Foo {
  name = 'foo';
}

class Bar {
  name = 'bar';
}

export const TARGET = new InjectionToken<string>('target', {
  providedIn: 'root',
  factory: () => {
    const target = inject(ENVIRONMENT).target;

    // test tree-shaking
    if (target === 'local') {
      console.log(new Foo().name);
    }

    if (target === 'test') {
      console.log(new Bar().name);
    }

    return target;
  },
});
