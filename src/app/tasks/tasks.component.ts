import { Component, OnInit } from '@angular/core';
import { Tasks } from './tasks.model';
import { Task, TASK } from './model/task.model';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  
  listTask: Task[] = [];

  constructor(){}

  ngOnInit(): void {
    this.listTask = TASK;
  }


  tasks : Tasks[] = [
    new Tasks('pietro','compierchio'),
    new Tasks('giancarlo','rotunno'),

  ]
  tasksD : Tasks[] = [
    new Tasks('element','delete'),
    new Tasks('elementi','eliminati'),

  ]
  tasksC : Tasks[] = [
    new Tasks('element','complete'),
    new Tasks('elementi','completati'),

  ]

  addNewTask(event: Task){
    console.log(event);
    let titleTask = event.title;
    let desriptionTask = event.description;
    this.tasks.push(new Tasks(titleTask, desriptionTask));
  }
  addNewTaskDelete(tasksD : Tasks){
    this.tasksD.push(tasksD);
  }
  addNewTaskComplete(tasksC : Tasks){
    this.tasksC.push(tasksC);
  }

  deleteTask(task: Tasks){
    const index = this.tasks.indexOf(task);
    console.log(index); // 👉️ 1

    if (index !== -1) {
    this.tasks.splice(index, 1);
    }
  }

  completeTask(task : Tasks){
    task.getCompleteTask();
  }
}
