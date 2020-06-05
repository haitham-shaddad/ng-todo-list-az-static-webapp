import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {



 getTodoList() {
    return fetch('api/GetTodoList');
  }
}
