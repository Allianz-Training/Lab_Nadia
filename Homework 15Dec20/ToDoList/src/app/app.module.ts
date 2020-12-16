import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TaskComponentComponent } from './task-component/task-component.component';
import { FormsModule } from '@angular/forms'
 
@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    TaskComponentComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
