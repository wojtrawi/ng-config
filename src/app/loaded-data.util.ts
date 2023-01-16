import { Observable, filter, take, switchMap } from 'rxjs';

export function loadedData$<T>(
  isLoaded$: Observable<boolean>,
  data$: Observable<T>
): Observable<T> {
  return isLoaded$.pipe(
    filter((isLoaded) => isLoaded),
    take(1),
    switchMap(() => data$),
    take(1)
  );
}
