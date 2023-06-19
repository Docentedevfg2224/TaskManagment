import { Component, EventEmitter, Output} from '@angular/core';
import { Task } from '../model/task.model';
@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent {
  titleTask : string ='';
  descriptionTask: string='';
  
  
  @Output() newTaskEvent = new EventEmitter<Task>();


  insertTask(){
    // let taskTuple : [string, string] = ['',''];
    // taskTuple.push(this.titleTask, this.descriptionTask);
    const taskObject : Task = {
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
  
  addNewTask(taskObject: Task){
    this.newTaskEvent.emit(taskObject);
  }
}
