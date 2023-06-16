import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent {
  titleTask : string ='';
  descriptionTask: string='';
  
  
  @Output() newTaskEvent = new EventEmitter<{"title": string, "description": string}>();


  insertTask(){
    // let taskTuple : [string, string] = ['',''];
    // taskTuple.push(this.titleTask, this.descriptionTask);
    const taskObject : {"title": string, "description": string} = {
      title: this.titleTask,
      description: this.descriptionTask
    };

    this.addNewTask(taskObject);
  }
  
  onUpdateTitleTask(event: Event){
    this.titleTask = (<HTMLInputElement>event.target).value;
  }

  onUpdateDescriptionTask(event: Event){
    this.descriptionTask = (<HTMLInputElement>event.target).value;
  }
  
  addNewTask(taskObject: {"title": string, "description": string}){
    this.newTaskEvent.emit(taskObject);
  }
}
