import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hwang2",
  templateUrl: "./hwang2.component.html",
  styleUrls: ["./hwang2.component.css"]
})
export class Hwang2Component implements OnInit {
  addWord: string = "";
  badWord: string = "";
  textArea: string = "";
  inputStatus: boolean;
  textAreaStatus: boolean;

  constructor() {}

  ngOnInit(): void {}
  elem(elem) {
    return document.querySelector(elem);
  }

  add(): void {
    this.inputStatus = false;
    this.addWord === ""
    ? (this.inputStatus = true)
    : this.badWord == ""
      ? (this.badWord = this.addWord)
      : (this.badWord += "," + this.addWord);
    this.addWord = ""
  }

  reset(): void {   
    this.addWord = ""
    this.badWord = ""
    this.inputStatus = false
    this.textArea = ""
    this.textAreaStatus = false
  }

  cenzor(): void {
    if(this.textArea !="") {
      this.textAreaStatus = false
      let arrAddWords: string [] = this.badWord.split(",")
      let arrTextarea: string [] = this.textArea.trim().split(" ")
      this.textArea = "";
      arrTextarea.forEach((value: string) => {
        arrAddWords.forEach((element: string) => {
          if (value == element) {
           let hideWord: string = "";
           value.split("").forEach((hideAdd: string) => {
            hideAdd ="*";
            hideWord += hideAdd;
           });
value = hideWord;
          }
        });
        this.textArea += value + " "
      });
    }else{
      this.textAreaStatus = true
    }
  }
}
