import { Component, Input, Output } from "@angular/core";
import { Task } from "../task.model";
import * as $ from 'jquery';
@Component({
    selector: 'app-task-edit',
    templateUrl: './task-edit.component.html',
     styleUrls: ['./task-edit.component.css']
})

export class TaskEditComponent
{

    @Input() array : Task[] = [];
    titolo : string = '';
    descrizione : string = '';

    

    addelement()
    {  
        this.array.push(new Task(this.titolo,this.descrizione));
        let inputTitle = $('#inputTitle');
        let inputDescription = $('#inputDescription');
        
        
        inputTitle.val('');
        inputDescription.val('');
    }

    edittitolo(event:Event)
    {  
        this.titolo = (<HTMLInputElement>event.target).value;
        console.log(event);
    }

    editdesc(event:Event)
    {
        this.descrizione = (<HTMLInputElement>event.target).value; 
    }

}