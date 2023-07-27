import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { IUser } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isLogged: boolean;

  constructor(private http: HttpClient) {
    this.isLogged = false
  }

  loadUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(environment.USERS + 'users');
  }

  loadUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(environment.USERS + 'users/' + id);
  }

  logIn(): void {
    this.isLogged = true;
    console.log('logIn');
  }

  logOut(): void {
    this.isLogged = false;
    console.log('logOut');
  }
}
