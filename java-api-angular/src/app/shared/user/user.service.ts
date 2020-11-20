import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
const endpoint = 'http://localhost:8080/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({providedIn: 'root'})
export class UserService {
 
  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getUsers(): Observable<any> {
    return this.http.get(endpoint + 'users').pipe(
      map(this.extractData));
  }
    
  getUser(id): Observable<any> {
    return this.http.get(endpoint + 'users/' + id).pipe(
      map(this.extractData));
  }
  
  addUser (user): Observable<any> {
    console.log(user);
    return this.http.post<any>(endpoint + 'users', JSON.stringify(user), httpOptions).pipe(
      tap((user) => console.log(`added user w/ id=${user.id}`)),
      catchError(this.handleError<any>('adduser'))
    );
  }
  
  updateUser (id, user): Observable<any> {
    return this.http.put(endpoint + 'users/' + id, JSON.stringify(user), httpOptions).pipe(
      tap(_ => console.log(`updated user id=${id}`)),
      catchError(this.handleError<any>('updateuser'))
    );
  }
  
  deleteUser (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'users/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted user id=${id}`)),
      catchError(this.handleError<any>('deleteuser'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}