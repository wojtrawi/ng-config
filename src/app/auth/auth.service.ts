import { Injectable } from '@angular/core';
import { BehaviorSubject, first, map, Observable, tap, timer } from 'rxjs';

interface AuthState {
  isVerified: boolean;
  isLoggedIn: boolean | null;
}

const initialState: AuthState = {
  isVerified: false,
  isLoggedIn: null,
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly state = new BehaviorSubject<AuthState>(initialState);

  public readonly state$ = this.state.asObservable();
  public readonly isLoggedIn$ = this.state$.pipe(
    first(({ isVerified }) => isVerified),
    map(({ isLoggedIn }) => isLoggedIn as boolean)
  );

  public verify(): Observable<boolean> {
    const isLoggedIn = true;
    // call to checkSession endpoint with session cookie or check if has expired access token
    return timer(2000).pipe(
      tap(() => {
        this.state.next({ isVerified: true, isLoggedIn });
      }),
      map(() => isLoggedIn)
    );
  }
}
