import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { IUser } from '../user';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../+store';
import { updateUser } from '../../../+store/action';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
      private http: HttpClient,
      private authService: AuthService,
      private store: Store<IRootState>
  ) { }

  loadUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(environment.JSON + 'users');
  }

  getCurrentUserProfile(id: number): Observable<IUser> {
    return this.http.get<IUser>(environment.JSON + 'users/' + id).pipe(
        tap((user: IUser) => this.store.dispatch(updateUser( { user } )))
    );
  }

  updateUserProfile(data: any): Observable<IUser> {
    return this.http.put(environment.JSON + 'users/', data).pipe(
        tap((user: any) => this.store.dispatch(updateUser( { user } )))
    );
  }
}
