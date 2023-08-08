import { createAction, props } from '@ngrx/store';
import { IUser } from '../app/user/user';

const authNamespace = `[AUTH];`
//props - съдържа това, което искаме да имеме в нашия request

export const login = createAction(`${authNamespace} Login`, props<{ user: IUser }>());
export const logout = createAction(`${authNamespace} Register`, props<{ user: IUser }>());
export const authenticate = createAction(`${authNamespace} Authenticate`, props<{ user: IUser }>());
export const register = createAction(`${authNamespace} Logout`);
