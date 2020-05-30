import { SaveToDoComponent } from "./save-to-do/save-to-do.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    component: TodoListComponent,
    path: "todolist",
  },
  {
    component: SaveToDoComponent,
    path: "new",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
