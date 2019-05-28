import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ToDo } from '../models/to-do';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todoList: ToDo[];
  newToDo: ToDo;
  selectedToDo: ToDo;
  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.todoList = this.getTodoList() || [];
    if (this.todoList.length) {
      this.selectedToDo = this.todoList[0];
    }
    this.newToDo = new ToDo();
    window.onbeforeunload = () => this.saveTodoList();
  }

  onChange(todo) {
    this.selectedToDo = null;
  }


  addToDo() {
    if (!this.newToDo.title) {
      return;
    }
    this.todoList.push(this.newToDo);
    this.selectedToDo = this.newToDo;
    this.newToDo = new ToDo();
    this.getElem('.todo-input').focus();
  }
  removeToDo(todo) {
    const index = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
    this.selectedToDo = null;
  }

  showToDoDetails(todo: ToDo) {
    this.selectedToDo = todo;
  }
  getElem(selector: string): HTMLElement {
    return this.element.nativeElement.querySelector(selector);
  }
  saveTodoList() {
    localStorage.setItem('todolist', JSON.stringify(this.todoList));
  }
  getTodoList(): ToDo[] | null {
    return JSON.parse(localStorage.getItem('todolist'));
  }
}
