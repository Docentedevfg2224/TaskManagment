import { Component, Input } from "@angular/core";
import { Task } from "../task.model";
@Component({
    selector: 'app-task-view',
    templateUrl: './task-view.component.html',
    // styleUrls: ['./app.component.css']
})

export class TaskViewComponent
{

    @Input() array : Task[]=[
        new Task("ciao","Mario"),
    ];
 

}