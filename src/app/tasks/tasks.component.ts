import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks: TaskComponent[] = [];

  addNewTask(newTask: TaskComponent){
    this.tasks.push(newTask);
  }
}
