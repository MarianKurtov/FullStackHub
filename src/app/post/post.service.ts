import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from './post';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  loadAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(environment.POST);
  }
}
