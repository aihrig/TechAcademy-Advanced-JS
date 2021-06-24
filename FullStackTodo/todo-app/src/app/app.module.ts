import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todos/todo-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule],
  declarations: [AppComponent, TodoListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
