import { inject, Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map } from 'rxjs';

import { loadedData$ } from '../loaded-data.util';
import { UserInfoService } from '../user-info';

@Injectable({ providedIn: 'root' })
export class PremiumFeatGuard implements CanActivate {
  private readonly userInfoService = inject(UserInfoService);

  canActivate() {
    const isLoaded$ = this.userInfoService.state$.pipe(
      map(({ isLoaded }) => isLoaded)
    );
    const data$ = this.userInfoService.state$.pipe(map(({ data }) => data));

    return loadedData$(isLoaded$, data$).pipe(map((data) => data!.isPremium));
  }
}
