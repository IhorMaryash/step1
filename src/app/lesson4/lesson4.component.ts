import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { IUser } from './user.interface';
import { User } from './user.model';


@Component({
  selector: 'app-lesson4',
  templateUrl: './lesson4.component.html',
  styleUrls: ['./lesson4.component.css']
})
export class Lesson4Component implements OnInit {

  modalRef: BsModalRef;
  modalRefRegister: BsModalRef;

  users: Array<IUser> = [];
  userID: number;
  userLogin: string;
  userPassword: string;
  userStatus: boolean;


  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    console.log(template);
    this.modalRef = this.modalService.show(template);
  }

  openModalRegister(template: TemplateRef<any>) {
    this.modalRefRegister = this.modalService.show(template);
  }


  addUser(): void {
    const newUser: IUser = new User(1,
      this.userLogin,
      this.userPassword,
      this.userStatus);
    if (this.users.length > 0) {
      newUser.id = this.users.slice(-1)[0].id + 1;
    }
    this.users.push(newUser);
    this.userLogin = '';
    this.userPassword = '';
  }

  editModal(template: TemplateRef<any>, user: IUser): void {
    this.modalRef = this.modalService.show(template);
    this.userLogin = user.login;
    this.userPassword = user.password;
  }

}
