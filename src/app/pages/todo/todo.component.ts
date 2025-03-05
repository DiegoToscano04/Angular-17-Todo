import { Component, Input } from '@angular/core';
import { NTodo } from '../../modelos/todo.modelos';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input({required : true}) todoData!: NTodo.TodoData;
}
