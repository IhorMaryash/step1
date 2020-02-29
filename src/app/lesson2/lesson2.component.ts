import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component implements OnInit {
  myName: string;
  userLogin: string;
  login: string;
  userPassword: string;
  greeting: string;
  statusSignIn: boolean;
  isEmptyLogin: boolean;
  isEmptyPassword: boolean;
  arrUser: Array<any> = [
    {name: 'ivan', sname: 'ivanov'},
    {name: 'petro', sname: 'petriv'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  // showName(): void {
  //   this.myName = 'Ivan';
  // }

  // showName(name: string): void {
  //   this.myName = name;
  // }

  showName(event, name: string): void {
    this.myName = name;
    console.log(event);
    event.target.disabled = true;
  }

  checkLogin(): void {
    this.login = this.userLogin;
  }

  signIn(): void{
    if(this.userLogin ==='admin' && this.userPassword==='1111'){
this.greeting = 'welcome';
this.statusSignIn  = true;
this.clearForms();
this.isEmptyLogin = false;
this.isEmptyPassword = false;
    }
    else if(this.userLogin || this.userPassword){
this.isEmptyLogin  = this.isEmptyLogin ? false : true;
this.isEmptyPassword  = this.isEmptyPassword ? false : true;
    }
    else if(this.isEmptyPassword){
      this.isEmptyPassword = true;
          }
    else{
      this.greeting = 'wrong data';
      this.statusSignIn  = false;
    }
    
  }

  private clearForms(): void {
    this.userLogin = '';
    this.userPassword = '';
  }
}
