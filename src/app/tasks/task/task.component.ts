import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() nameTask: string = '';
  @Input() descriptionTask: string = '';
  isCompleted: boolean = false;

  constructor(){

  }

  setCompleted(){
    this.isCompleted = true;
  }

  getColor(){
    return this.isCompleted === false
  }
}