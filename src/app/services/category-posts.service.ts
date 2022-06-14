import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryPosts } from '../models/CategoriesPosts';
@Injectable({
  providedIn: 'root'
})
export class CategoryPostsService {

  API_URL: string = ' http://localhost:3000/categoryPosts';

  constructor(private http: HttpClient) {}

  getcategoryPost(id: number): Observable<CategoryPosts> {
    return this.http.get<CategoryPosts>(`${this.API_URL}/${id}`);
  }
  getcategoriesPosts(): Observable<CategoryPosts[]> {
    return this.http.get<CategoryPosts[]>(this.API_URL);
  }
  createcategoryPost(categoryPost: any): Observable<CategoryPosts> {
    return this.http.post<CategoryPosts>(`${this.API_URL}`, categoryPost);
  }
  removecategoryPost(id: number): Observable<CategoryPosts> {
    return this.http.delete<CategoryPosts>(`${this.API_URL}/${id}`);
  }
  updatecategoryPost(categoryPost: CategoryPosts): Observable<CategoryPosts> {
    return this.http.put<CategoryPosts>(`${this.API_URL}/${categoryPost.id}`, categoryPost);
  }
}
