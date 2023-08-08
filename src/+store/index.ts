import { IAuthState } from '../app/interfaces/AuthState';
import { ActionReducerMap } from '@ngrx/store';
import { authReducer } from './reducer';

export interface IRootState{
  readonly auth: IAuthState;
}

export const reducers: ActionReducerMap<IRootState> = {
  auth: authReducer
}
