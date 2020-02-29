import { Component, OnInit } from '@angular/core';
import { NUser } from './user.interface';
import { User1 } from './user.model';

@Component({
  selector: 'app-hwang4',
  templateUrl: './hwang4.component.html',
  styleUrls: ['./hwang4.component.css']
})
export class Hwang4Component implements OnInit {
  users: Array<NUser> = [];
  userID: number;
  userTask: string;
  userCheck: boolean;
  userDone: boolean;
  userStatus: boolean;
  editTask: string;
  editStatus: boolean;
  saveEditTask: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
