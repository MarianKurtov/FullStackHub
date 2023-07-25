import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITheme } from '../interfaces/theme';
import { environment } from '../../environments/environments';
import { IPost } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  constructor(private http: HttpClient) {
  }

  loadAllThemes(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(environment.THEMES);
  }

  loadAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(environment.POST);
  }
}
