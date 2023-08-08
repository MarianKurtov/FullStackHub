import { createReducer, on } from '@ngrx/store';
import { authenticate, login, logout, register } from './action';
import { IAuthState } from '../app/interfaces/AuthState';

export const initialState = {
  currentUser: undefined
}

const setCurrentUser = (
  state: IAuthState,
  action: any
    // ReturnType<typeof login> |
    // ReturnType<typeof authenticate> |
    // ReturnType<typeof register>
) => {
  return { ...state, currentUser: action.user };
};

export const authReducer = createReducer<IAuthState>(
  initialState,
  on(login, setCurrentUser),
  on(authenticate, setCurrentUser),
  on(register, setCurrentUser),
  on(logout, (state) => {
    return { ...state, currentUser: null };
  })
);

