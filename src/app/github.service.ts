import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from './user';
import { Repos } from './repos';
import { Starred } from './starred';
import { CLIENT_ID, CLIENT_SECRET } from './githubOauth';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  apiURL = 'https://api.github.com/users';
  static apiURL: string;

  constructor(private http: HttpClient) { }

  public getByLoginUserRepos(login: string): Observable<Repos[]> {
    return this.http.get<Repos[]>(`${this.apiURL}/${login}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);
  }

  public getByLoginUserStarred(login: string): Observable<Starred[]> {
    return this.http.get<Starred[]>(`${this.apiURL}/${login}/starred?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);
  }

  public getProfile(login: string): Observable<User>{
    let dataURL = `${this.apiURL}/${login}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return this.http.get<User>(dataURL).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }

  public handleErrors(error: HttpErrorResponse){
    let errorMessage: string;

    if(error.error instanceof ErrorEvent){
      errorMessage = `MESSAGE: ${error.error.message}`;
    }
    else {
      errorMessage = `STATUS: ${error.status} MESSAGE: ${error.message}`
    }
    return throwError(errorMessage);
  }

}
