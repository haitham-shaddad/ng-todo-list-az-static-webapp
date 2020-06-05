import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {



 getTodoList() {
    return fetch('http://localhost:7071/api/GetTodoList');
  }
}
