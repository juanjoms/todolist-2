import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { ToDo } from '../models/to-do';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let elemement;

  beforeEach(() => {
    elemement = {};
    component = new TodoListComponent(elemement);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ('should onInit initialize newTodo', () => {
    expect(component.newToDo).toBeUndefined();
    component.ngOnInit();
    expect(component.newToDo).toBeDefined();
  });

  it ('should onInit initialize selectedToDo', () => {
    const todo = {title: '', isCompleted: true, subtasks: []};
    component.getTodoList = () => [todo];
    component.ngOnInit();
    expect(component.selectedToDo).toEqual(todo);
  });

  it ('should onbeforeunload save the todos', () => {
    spyOn(component, 'saveTodoList');
    component.ngOnInit();
    window.onbeforeunload({} as Event);
    expect(component.saveTodoList).toHaveBeenCalled();
  });

  it ('should onChnge return null', () => {
    component.onChange([]);
    window.onbeforeunload({} as Event);
    expect(component.selectedToDo).toEqual(null);
  });
});
