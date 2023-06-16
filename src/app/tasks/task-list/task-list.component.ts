import { Component } from '@angular/core';
import { Tasks } from '../tasks.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks : Tasks[] = [
    new Tasks('pietro','compierchio'),
    new Tasks('giancarlo','rotunno'),

  ]

  deleteTask(task : Tasks){
    task.getDeleteTask
  }

  completeTask(task : Tasks){
    task.getCompleteTask();
  }
}
