import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: any;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodoList().then((response) => response.json()).then(data =>{
       this.todos = data;
       console.log(data);
    });
  }
}
