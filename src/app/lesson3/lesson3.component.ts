import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.css']
})
export class Lesson3Component implements OnInit {
  arrNames: Array<string> = ['ivan', 'petro', 'pavlo']
  newName: string;
  editNameStr: string;
  editIndex: number;
  editStatus: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  addName(): void {
    this.arrNames.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number): void {
    this.arrNames.splice(index, 1)
  }

  editName(index: number): void {
    this.editNameStr = this.arrNames[index];
    this.editIndex = index;
    this.editStatus = true;
  }

  saveEditName(): void {
    this.arrNames.splice(this.editIndex, 1, this.editNameStr);
    this.editNameStr = '';
    this.editStatus = false;
  }

}
