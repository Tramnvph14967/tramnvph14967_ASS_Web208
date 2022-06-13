import { Injectable } from '@angular/core';
import mockData from 'src/data';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IPosts } from '../models/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  API_URL: string = ' http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getPost(id: number): Observable<IPosts> {
    return this.http.get<IPosts>(`${this.API_URL}/${id}`)
  }
  getPosts(): Observable<IPosts[]> {
    return this.http.get<IPosts[]>(`${this.API_URL}`)
  }
  removePost(id: number): Observable<IPosts> {
    return this.http.delete<IPosts>(`${this.API_URL}/${id}`)
  }
  addPost(post: any): Observable<IPosts> {
    return this.http.post<IPosts>(`${this.API_URL}`, post)
  }
  updatePost(post: IPosts) {
    return this.http.put<IPosts>(`${this.API_URL}/${post.id}`, post);
  }
}
