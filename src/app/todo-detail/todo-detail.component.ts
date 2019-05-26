import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { ToDo } from '../models/to-do';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnChanges {
  @Input() todo: ToDo;
  @Output() removed = new EventEmitter<ToDo>();
  newSubtask: string;

  constructor() {
  }

  ngOnChanges(changes: {[prop: string]: SimpleChange}) {
    if (changes.todo && !this.todo.subtasks) {
      this.todo.subtasks = [];
    }
  }

  addSubtask() {
    if (this.newSubtask) {
      this.todo.subtasks.push(this.newSubtask);
      this.newSubtask = '';
    }
  }

  onRemove() {
    this.removed.emit(this.todo);
  }

}
