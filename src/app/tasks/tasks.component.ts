import { Component } from '@angular/core';
import { Tasks } from './tasks.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  
  tasks : Tasks[] = [
    new Tasks('pietro','compierchio'),
    new Tasks('giancarlo','rotunno'),

  ]

  addNewTask(event: {"title": string, "description": string}){
    console.log(event);
    let titleTask = event.title;
    let desriptionTask = event.description;
    this.tasks.push(new Tasks(titleTask, desriptionTask));
  }

  deleteTask(task : Tasks){
    task.getDeleteTask();
  }

  completeTask(task : Tasks){
    task.getCompleteTask();
  }
}
