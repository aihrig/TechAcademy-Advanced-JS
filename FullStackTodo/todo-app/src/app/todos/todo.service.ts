import { HttpClient } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ITodo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoApiUri = 'http://localhost:3030/api/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<ITodo[]> {
    return this.http
      .get<ITodo[]>(this.todoApiUri)
      .pipe(tap((data) => console.log('All', JSON.stringify(data))));
  }

  createTodo(todo: ITodo): Observable<any> {
    return this.http
      .post(this.todoApiUri, { description: todo.description })
      .pipe(tap((data) => console.log('New todo: ', JSON.stringify(data))));
  }

  toggleTogoDone(todo: ITodo): Observable<any> {
    console.log('---> toggleTodoDone() called');
    const done = !todo.done;
    return this.http
      .put<any>(`${this.todoApiUri}/${todo._id}`, { done: done })
      .pipe(
        tap((data) => console.log('Todo to update: ', JSON.stringify(data)))
      );
  }

  deleteTodo(todo: ITodo): Observable<any> {
    console.log('---> deleteTodo() called');
    return this.http
      .delete<any>(`${this.todoApiUri}/${todo._id}`)
      .pipe(
        tap((data) => console.log('Todo to delete: ', JSON.stringify(data)))
      );
  }
}
