import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  k:string;
  email: string;
  password: string;
  message: any

  constructor(private service: RestapiService,private router:Router) { }

  ngOnInit() {
  }
  
  public doLogin(email: String, password: string): void {
    
    this.service.login(email,password).subscribe(
      (response: void) => {
        console.log(response);
        this.router.navigate(["/home"])
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  /*doLogin() {
    let resp = this.service.doLogin(this.email, this.password);
    resp.subscribe(data => {
      this.message = data;
     this.router.navigate(["/home"])
    });
  }*/
}
