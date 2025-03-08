import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { TODO_DATA } from '../assets/todo';
import { NTodo } from './modelos/todo.modelos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todoData = TODO_DATA;

  constructor () {
  }
  getTodoInfo(val: NTodo.TodoData) {
   console.log(val);
  }
  trackById(index: number, item: NTodo.TodoData) {
    return item.id;
  }
  OrderData () {
    this.todoData = this.todoData.sort((a, b) => a.priority - b.priority);
  }
}
