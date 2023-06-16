import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TaskEditComponent } from "./tasks/task-edit/task-edit.component";
import { TaskListComponent } from "./tasks/task-list/task-list.component";


const routes: Routes = [
    {
        path: 'task-edit',
        component: TaskEditComponent
    },

    {
        path: 'task-list',
        component: TaskListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}