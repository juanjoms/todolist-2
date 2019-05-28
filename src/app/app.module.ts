import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatListModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
