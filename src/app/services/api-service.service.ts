import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { example } from '../models/Department';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
export interface Post {
  userId: number;
  title: string;
  body: string;
}
@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {
  dataurl='service/hero';
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
  getData(){
    // this.http.get('/ffd',{
    //   responseType: 'text'
    // })
    return this.http.get<example>(this.dataurl);
  }
  getConfigResponse():Observable<HttpResponse<example>> {
    console.log("enter2")
    return this.http.get<example>(
      this.dataurl,
       { observe: 'response' });
  }
  delete(url): Observable<{}> {
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
