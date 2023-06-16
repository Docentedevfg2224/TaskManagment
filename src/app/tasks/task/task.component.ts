import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  nameTask: string = '';
  descriptionTask: string = '';
  // isCompleted: boolean = false;

  @Output() newTaskEvent = new EventEmitter<{"name": string, "description": string}>();

  constructor(){
  }



  // setCompleted(){
  //   this.isCompleted = true;
  // }

  // getColor(){
  //   return this.isCompleted === false ? 'red' : 'green';
  // }

  onUpdateNameTask(event : Event){
    this.nameTask = (<HTMLInputElement>event.target).value;
  }

  onUpdateDescriptionTask(event : Event){
    this.descriptionTask = (<HTMLInputElement>event.target).value;
  }

  insertTask(){
    
    let newTask : {"name": string, "description": string} = {
      name: this.nameTask,
      description: this.descriptionTask
    };

    this.addNewTask(newTask);
  }

  addNewTask(newTask: {"name": string, "description": string}){
    this.newTaskEvent.emit(newTask);
  }
}