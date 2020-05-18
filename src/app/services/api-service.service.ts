import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Post {
  userId: number;
  title: string;
  body: string;
}
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor( private http:HttpClient   ) { }
  login(user){
    localStorage.setItem('currentUser', JSON.stringify(user));

  }
//   public get currentUserValue(): User {
//     return this.currentUserSubject.value;
// }
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
