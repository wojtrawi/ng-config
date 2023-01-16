import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap, timer } from 'rxjs';

import { UserInfo } from './user-info';

interface UserInfoState {
  isLoaded: boolean;
  data: UserInfo | null;
}

const initialState: UserInfoState = {
  isLoaded: false,
  data: null,
};

const mockUserInfo: UserInfo = {
  name: 'john',
  isPremium: false,
};

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  private readonly state = new BehaviorSubject<UserInfoState>(initialState);

  public readonly state$ = this.state.asObservable();

  public load(): Observable<UserInfo> {
    return timer(2000).pipe(
      map(() => mockUserInfo),
      tap((userInfo) => {
        this.state.next({ isLoaded: true, data: userInfo });
      })
    );
  }
}
