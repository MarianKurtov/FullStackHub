import { IUser } from '../user/user';

export interface IAuthState {
  currentUser: IUser | null | undefined;
}
