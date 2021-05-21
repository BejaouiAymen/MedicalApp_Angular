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
    let k=email.concat(" "+password);
    return this.http.get<void>(`${this.apiServerUrl}/login/auth/${k}`);
  }

  getUsers() {
    let username='pfa@gmail.com'
    let password='pfapfa'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
   return  this.http.get("http://localhost:9001/getUsers",{headers});
  }
}
