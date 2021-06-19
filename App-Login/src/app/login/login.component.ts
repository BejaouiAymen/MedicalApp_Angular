import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { User } from '../user';

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
        alert("Email or Password est invalide");
      }
    );
  }


  public auth(addForm: NgForm): void {
    this.service.login2(addForm.value).subscribe(
      (response: User) => {
        console.log(response);
        this.router.navigate(["/home"])

      },
      (error: HttpErrorResponse) => {
        alert("email or password is invalid");
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
