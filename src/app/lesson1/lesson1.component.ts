import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {
  title: string = 'Lesson1';
  user = {
    login: 'admin',
    password: 1111
  };

  url = 'http://www.gooogle.com';
  myPL = 'Write some text';
  isCheck: boolean;

  constructor() { }
  ngOnInit(): void {
  }
  sayHello(): string {
    return 'Progect name: Lesson1';
  }
  
  changeInput(): void{
this.isCheck = true;
this.myPL = 'value is empty';
  }
}
