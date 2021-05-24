import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any;
  public mail: String;
  public user: User;

  constructor(private service: RestapiService,private router:Router) { }

  ngOnInit() {
    this.test();

  }

 
  public test(): void {
    this.service.safe().subscribe(
      (response: User) => {
        this.user=response;
        console.log(this.user);

      },
      (error: HttpErrorResponse) => {
        this.router.navigate(["/login"])
      }
    );
  }
  /*public logout(): void {
    this.service.logout(null).subscribe(
      (response: User) => {
        this.router.navigate(["/login"])

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }*/
  public logout(addForm: NgForm): void {
    this.service.logout().subscribe(
      (response: null) => {
        console.log(response);
        this.router.navigate(["/login"])

      },
      (error: HttpErrorResponse) => {
        alert("erreur");
      }
    );
  }
 /* getUsers(){
let resp=this.service.getUsers();
resp.subscribe(data=>this.users=data);
  }
*/
}
