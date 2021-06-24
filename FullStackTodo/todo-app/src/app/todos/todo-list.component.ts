import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-list',
  styles: [
    `
      li {
        list-style-type: none;
        font-family: helvetica;
        font-weight: bold;
      }
    `,
  ],
  template: `
    <div>
      <form
        #newTodo="ngForm"
        (ngSubmit)="createTodo(newTodo.value); newTodo.resetForm()"
      >
        <div class="row">
          <div class="input-group mb-3">
            <input
              name="description"
              type="text"
              class="form-control col-sm-3"
              id="addDescription"
              placeholder="New Todo"
              ngModel
            />
            <div class="input-group-append">
              <button
                type="submit"
                id="addTodo"
                class="btn btn-outline-secondary"
                value="submit"
              >
                Add Todo
              </button>
            </div>
          </div>
        </div>

        <div class="row">
          <ul>
            <li *ngFor="let todo of todos">
              <div class="col form-check form-check-inline">
                <button
                  (click)="deleteTodo(todo)"
                  id="{{ todo._id }}"
                  name="deleteTodo"
                  class="btn btn-sm btn-danger form-group mx-sm-1 mb-1"
                >
                  x
                </button>
                <input
                  class="form-check-input form-group mx-sm-1 mb-1"
                  (change)="toggleTodo(todo)"
                  type="checkbox"
                  id="{{ todo._id }}"
                  [checked]="todo.done"
                />
                <label
                  for="{{ todo._id }}"
                  class="form-check-label form-group mx-sm-1 mb-1"
                >
                  {{ todo.description }}
                </label>
              </div>
            </li>
          </ul>
        </div>
      </form>
    </div>
  `,
})
export class TodoListComponent implements OnInit, OnDestroy {
  sub!: Subscription;

  constructor(private todoService: TodoService) {}

  todos: ITodo[] = [];

  ngOnInit(): void {
    this.sub = this.todoService.getTodos().subscribe({
      next: (todos) => {
        this.todos = todos;
      },
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  toggleTodo(todo: ITodo) {
    console.log('Calling todoService.toggleTodoDone for id: ' + todo._id);
    this.todoService.toggleTogoDone(todo).subscribe((res) => {
      console.log('toggled todo!');
    });
  }

  deleteTodo(todo: ITodo) {
    console.log('Calling todoService.delete for id: ' + todo._id);
    this.todoService.deleteTodo(todo).subscribe((res) => {
      console.log('deleted todo');
      this.ngOnInit();
    });
  }

  createTodo(todo: ITodo) {
    console.log('Calling createTodo' + JSON.stringify(todo));
    this.todoService.createTodo(todo).subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }
}
