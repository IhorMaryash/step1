import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hwang3",
  templateUrl: "./hwang3.component.html",
  styleUrls: ["./hwang3.component.css"]
})
export class Hwang3Component implements OnInit {
  arrUsers = [];
  newLogin: string;
  newPassword: string;
  newEmail: string;
  index: number;
  editStatus: boolean;
  editUserStr: string;
  editIndex: number;

  constructor() {}

  ngOnInit(): void {}

  addUser(): void {
    let newUser = {
      login: this.newLogin,
      password: this.newPassword,
      email: this.newEmail
    };
    this.arrUsers.push(newUser);
    this.newLogin = "";
    this.newPassword = "";
    this.newEmail = "";
  }

  deleteUser(index): void {
    this.arrUsers.splice(index, 1);
    }

  editUser(index): void {
    this.newLogin = this.arrUsers[index].login;
    this.newPassword = this.arrUsers[index].passwod;
    this.newEmail = this.arrUsers[index].email;
    this.editStatus = true;
    this.editIndex = index;
  }

  saveEditUser(): void {
    let editUser = {
      login: this.newLogin,
      password: this.newPassword,
      email: this.newEmail
    };
    this.arrUsers.splice(this.editIndex, 1, editUser);
    this.editStatus = false;
    this.newLogin = "";
    this.newPassword = "";
    this.newEmail = "";
  }
}
