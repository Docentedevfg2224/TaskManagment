import { Component } from '@angular/core';
import { Tasks } from '../tasks.model';


@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent {
  tasksD : Tasks[] = [
    new Tasks('element','delete'),
    new Tasks('elementi','eliminati'),

  ]

  addNewTaskDelete(event: {"title": string, "description": string}){
    console.log(event);
    let titleTask = event.title;
    let desriptionTask = event.description;
    this.tasksD.push(new Tasks(titleTask, desriptionTask));
  }
}
