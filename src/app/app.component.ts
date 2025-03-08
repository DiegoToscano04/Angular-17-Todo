import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { TODO_DATA } from '../assets/todo';
import { NTodo } from './modelos/todo.modelos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todoData1 = TODO_DATA[0];
  todoData2 = TODO_DATA[1];

  getTodoInfo(val: NTodo.TodoData) {
   console.log(val);
  }
}
