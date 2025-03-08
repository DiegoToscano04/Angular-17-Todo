import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NTodo } from '../../modelos/todo.modelos';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input({required : true}) todoData!: NTodo.TodoData;
  
  @Input() first!: boolean;
  @Input() last!: boolean;
  @Input() even!: boolean;
  @Input() odd!: boolean;

  @Output() OnClickIcon = new EventEmitter<NTodo.TodoData>();
}
