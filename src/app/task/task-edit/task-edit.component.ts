import { Component, Input, Output } from "@angular/core";
import { Task } from "../task.model";

@Component({
    selector: 'app-task-edit',
    templateUrl: './task-edit.component.html',
     styleUrls: ['./task-edit.component.css']
})

export class TaskEditComponent
{

    @Input() array;
    titolo : string = '';
    descrizione : string = '';


    addelement()
    {  
        this.array(new Task(this.titolo,this.descrizione));
    }

    edittitolo(event:Event)
    {
        this.titolo = (<HTMLInputElement>event.target).value;
    }
    editdesc(event:Event)
    {
        this.descrizione = (<HTMLInputElement>event.target).value; 
    }

}