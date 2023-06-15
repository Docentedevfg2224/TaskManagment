import { Component } from '@angular/core';
import { Tasks } from '../tasks.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  task : Tasks[] = [
    new Tasks('pietro','compiechio'),
    new Tasks('giancarlo','rotunno'),

  ]

}
