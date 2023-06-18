import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';

import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskDeleteComponent } from './tasks/task-delete/task-delete.component';
import { TaskCompleteComponent } from './tasks/task-complete/task-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    TaskEditComponent,
    TaskListComponent,
    TaskDeleteComponent,
    TaskCompleteComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
