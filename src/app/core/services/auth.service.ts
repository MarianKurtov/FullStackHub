import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../+store';
import { map, Observable, tap } from 'rxjs';
import { login, register, logout } from '../../../+store/action'
import { IUser } from '../../user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$ = this.store.select((state) => state.auth.currentUser);
  isReady$ = this.currentUser$.pipe(map(currentUser => currentUser != null));
  isLogged = this.store.pipe(map(currentUser => currentUser !== undefined))

  constructor(
      private httpClient: HttpClient,
      private store: Store<IRootState>
  ) { }

  login(data: any): Observable<any> {
    return this.httpClient.post(`/users/login`, data).pipe(
        tap((user: any) => this.store.dispatch(login({ user }))))
  }

  register(data: any): Observable<any> {
    return this.httpClient.post(`/users/login`, data).pipe(
        tap((user: any) => this.store.dispatch(register({ user }))))
  }

  logout(data: any): Observable<any> {
    return this.httpClient.post(`/users/login`, data).pipe(
        tap((user: any) => this.store.dispatch(logout())))
  }

  authenticate(): boolean {
    return false;
  }

  updateCurrentUser(user: IUser) {

  }
}
