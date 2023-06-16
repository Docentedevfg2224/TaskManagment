import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from './task.model';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent 
{
  @Output() tasks: Task[] = [];
  @Output() newTaskEvent = new EventEmitter<{tasks: Task[]}>();




}

