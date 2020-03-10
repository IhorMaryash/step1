import { Component, OnInit, TemplateRef } from "@angular/core";
import { IUser } from "./user.interface";
import { MUser } from "./user.model";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-hwang6",
  templateUrl: "./hwang6.component.html",
  styleUrls: ["./hwang6.component.css"]
})
export class Hwang6Component implements OnInit {
  arrUsers: Array<IUser> = [
    {
      firstName: "Ivan",
      lastName: "Ivaniv",
      phoneNumber: "0972585212"
    },

    {
      firstName: "Petro",
      lastName: "Petriv",
      phoneNumber: "0501542683"
    },

    {
      firstName: "Pavlo",
      lastName: "Pavliv",
      phoneNumber: "0684545457"
    },

    {
      firstName: "Ilona",
      lastName: "Datsiv",
      phoneNumber: "0964475535"
    },

    {
      firstName: "Marta",
      lastName: "Boyko",
      phoneNumber: "0662225511"
    },

    {
      firstName: "Lida",
      lastName: "Khmyz",
      phoneNumber: "0502288779"
    }
  ];

  modalRef: BsModalRef;
  searchData: string = "";
  userPhoneNumber: string = "";
  userLastName: string = "";
  userFirstName: string = "";
  arrIndex: number;
  visual: boolean;
  regExp: RegExp = /^\d+$/;
  sortStatus: boolean;
  key: string;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {
    console.log(template);
    this.modalRef = this.modalService.show(template);
  }

  range(rangeby){
    this.key = rangeby
    this.sortStatus = !this.sortStatus
  }
  
  public reset() {
    this.userFirstName = "";
    this.userLastName = "";
    this.userPhoneNumber = "";
  }

  // public addUser(value: string) {
  //   this.arrUsers.push({
  //     firstName: value,
  //     lastName: value,
  //     phoneNumber: value
  //   });
  //   this.reset();
  // }

 
  public addUser(hide: () => void) {
    if( this.userFirstName !="" && this.userFirstName !="" && (this.userPhoneNumber) !=""){
    const newUser: IUser = new MUser(
      this.userFirstName,
      this.userLastName,
      this.userPhoneNumber);
    this.arrUsers.push(newUser);
    this.reset();
    hide();
  }
  }


  public deleteUser(userindex: number) {
    this.arrUsers.splice(userindex, 1);
  }

  public editUser(template: TemplateRef<any>, userindex: number): void {
    this.modalRef = this.modalService.show(template);
    this.arrIndex = userindex;
    this.visual = true;
    this.userFirstName = this.arrUsers[userindex].firstName;
    this.userLastName = this.arrUsers[userindex].lastName;
    this.userPhoneNumber = this.arrUsers[userindex].phoneNumber;
  }

  public renameUser(hide: () => void) {
    if( this.userFirstName !="" && this.userFirstName !="" && (this.userPhoneNumber) !=""){
    const newUser: IUser = new MUser(
      this.userFirstName,
      this.userLastName,
      this.userPhoneNumber);
      this.arrUsers.splice(this.arrIndex, 1, newUser)
      this.visual = false;
    this.reset();
    hide();
  }
  }
}
