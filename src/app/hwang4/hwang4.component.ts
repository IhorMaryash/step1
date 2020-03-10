import { Component } from "@angular/core";
import { ITask } from "./user.interface";

@Component({
  selector: "app-hwang4",
  templateUrl: "./hwang4.component.html",
  styleUrls: ["./hwang4.component.css"]
})
export class Hwang4Component {
  tasks: ITask[] = [
    {
      taskName: "HTML",
      taskStatus: "InProgress"
    },
    {
      taskName: "JQuery",
      taskStatus: "InProgress"
    },
    {
      taskName: "Angular",
      taskStatus: "InProgress"
    },
    {
      taskName: "Bootstrap",
      taskStatus: "InProgress"
    },
    {
      taskName: "HTML5",
      taskStatus: "InProgress"
    }
  ];

  editStatus = false;
  editedTaskName: string;
  editedTaskIndex: number;

  public addTask(value: string) {
    this.tasks.push({
      taskName: value,
      taskStatus: "InProgress"
    });
  }
  public deleteTask(taskindex) {
    this.tasks.splice(taskindex, 1);
  }
  public checkCheckbox(taskCheck: boolean, index: number) {
    taskCheck
      ? (this.tasks[index].taskStatus = "Done")
      : (this.tasks[index].taskStatus = "InProgress");
  }

  public editTask(nameTask) {
    const selectedTask = this.tasks.find(task => task.taskName === nameTask);
    this.editStatus = true;
    this.editedTaskName = nameTask;
    this.editedTaskIndex = this.tasks.indexOf(selectedTask);
  }
  
  public saveEditTask() {
    this.tasks[this.editedTaskIndex].taskName = this.editedTaskName;
    this.editStatus = false;
    this.editedTaskIndex = null;
  }
}
