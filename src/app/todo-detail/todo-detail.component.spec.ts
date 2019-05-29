import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailComponent } from './todo-detail.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatIconModule, MatListModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatChipsModule } from '@angular/material';
import { ToDo } from '../models/to-do';

describe('TodoDetailComponent', () => {
  let component: TodoDetailComponent;
  let fixture: ComponentFixture<TodoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDetailComponent ],
      imports: [FormsModule,
        FormsModule,
        MatButtonModule,
        MatChipsModule,
        MatCheckboxModule,
        MatInputModule,
        MatListModule,
        MatIconModule,
        MatDatepickerModule,
        MatCheckboxModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove a todo from the list of todos', ( )=> {
    /*  remove(subtask: string) {
    const index = this.todo.subtasks.indexOf(subtask);
    this.todo.subtasks.splice(index, 1);
  }*/
    component.todo = new ToDo();
    component.todo.subtasks = ['task1', 'task2', 'task3'];
    component.remove('task2');
    expect(component.todo.subtasks).toEqual(['task1', 'task3'])
  });
});
