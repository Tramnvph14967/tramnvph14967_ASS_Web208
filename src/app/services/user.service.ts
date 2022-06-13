import { Injectable } from '@angular/core';
import mockData from 'src/data';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IUser } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.API_URL}/${id}`)
  }
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.API_URL}`)
  }
  removeUser(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`${this.API_URL}/${id}`)
  }
  addUser(user: any): Observable<IUser> {
    return this.http.post<IUser>(`${this.API_URL}`, user)
  }
  updateUser(user: IUser) {
    return this.http.put<IUser>(`${this.API_URL}/${user.id}`, user);
  }
  login(user: { email: string, password: string }) {
    return this.http.post<IUser>(`${this.API_URL}/login`, user)
}
}
