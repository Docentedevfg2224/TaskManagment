import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() nameTask: string = '';
  @Input() descriptionTask: string = '';
  isCompleted: boolean = false;
  @Output() newTaskEvent = new EventEmitter<TaskComponent>();

  constructor(){

  }

  setCompleted(){
    this.isCompleted = true;
  }

  getColor(){
    return this.isCompleted === false ? 'red' : 'green';
  }

  onUpdateNameTask(event : Event){
    this.nameTask = (<HTMLInputElement>event.target).value;
  }

  onUpdateDescriptionTask(event : Event){
    this.descriptionTask = (<HTMLInputElement>event.target).value;
  }

  insertTask(){
    let newTask = new TaskComponent;
    this.addNewTask(newTask);
  }

  addNewTask(newTask: TaskComponent){
    this.newTaskEvent.emit(newTask);
  }
}