import { Component } from '@angular/core';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent {

  task: {"nome": string, "descrizione": string} = {nome: '', descrizione: ''};
 
  aggiungiNome(event: Event){
    console.log(event);
    // let nome = (<HTMLBaseElementevent>.target).value;
  }
}
