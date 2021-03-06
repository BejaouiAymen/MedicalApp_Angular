import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
    private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }
/*
doLogin(email:string,password:string){
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(email + ':' + password) });
  return this.http.get("http://localhost:9001/login/auth",{headers,responseType: 'text' as 'json'})
}*/

  public login(email: String, password: string): Observable<void> {
    let k=email.concat(" "+password );
    return this.http.get<void>(`${this.apiServerUrl}/login/auth/${k}`);
  }
  public login2(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/login/add`, user);
  }
   public safe(): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/login/safe`);
  }
  public logout(): Observable<void> {
    return this.http.get<void>(`${this.apiServerUrl}/login/logout`);
  }
  


  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/login/all`);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/login/add`, user);
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/login/update`, user);
  }

  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/login/delete/${userId}`);
  }

  public predict(symptome: String): Observable<void> {
    return this.http.post<void>(`http://localhost:5000`, symptome);
  }


}
