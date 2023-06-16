import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks: {"name": string, "description": string, "isCompleted": boolean}[] = [];


  addNewTask(newTask: {"name": string, "description": string}){
    console.log(newTask);
    let task: {"name": string, "description": string, "isCompleted": boolean} = {
      name: newTask.name,
      description: newTask.description,
      isCompleted: false
    }
    console.log(task);
    this.tasks.push(task);
  }
}
