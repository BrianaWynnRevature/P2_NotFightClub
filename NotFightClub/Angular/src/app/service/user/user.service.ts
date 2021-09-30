import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { catchError, map, tap } from 'rxjs/operators';
import { UserR } from '../../interfaces/userR';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:5000';
  //private urlB = 'https://localhost:44326/'
  //create functions for http requests
  UserList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/api/user`)
  }

  getUserById(id: Guid): Observable<User>{
    return this.http.get<User>(`${this.url}/users/` + id).pipe(map((user:User)=>user))
  }



  Login(email: string): Observable<UserR> {
    //I just get the user and send it back
    return this.http.get<UserR>(`${this.url}/Login/${email}`)
  }

  Register(user: UserR): Observable<UserR> {


    console.log('Making call to controller:')
    console.log(user);

    return this.http.post<UserR>(`${this.url}/Register`, user, {

      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
       
    })
      .pipe(catchError(this.handleError<UserR>('register User', user)));
  }

    private handleError<T>(operation:string, result?:T) {
      return (error: any): Observable<T> => {
        console.error(error);
        console.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
  }
       
    
      
  

  



  
  
}//eoc
