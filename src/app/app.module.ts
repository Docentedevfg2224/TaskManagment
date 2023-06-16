import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskViewComponent } from './task/task-view/task-view.component';
import { TaskEditComponent } from './task/task-edit/task-edit.component';
import { TaskComponent } from './task/task.component';
@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    TaskEditComponent,
    TaskComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
