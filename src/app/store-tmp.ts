import { createAction, createReducer, on, props } from '@ngrx/store';

export const init = createAction(
  '[App Cmp] Init',
  props<{ message: string }>()
);

export interface State {
  initialized: boolean;
  message: string | null;
}

export const initialState: State = {
  initialized: false,
  message: null,
};

export const reducer = createReducer(
  initialState,
  on(init, (state, { message }) => ({ ...state, initialized: true, message }))
);
