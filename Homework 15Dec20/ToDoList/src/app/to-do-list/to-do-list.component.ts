import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  @Input()
  inputName: string = '';
  @Input()
  inputDescription: string = '';

  todoList: Task[];

  constructor() {
    this.todoList = [];
    this.todoList.push({
      id: 111,
      name: "Breakfast",
      description: "eat1"
    });
    this.todoList.push({
      id: 222,
      name: "Lunch",
      description: "eat2"
    });
    this.todoList.push({
      id: 333,
      name: "Dinner",
      description: "eat3"
    });
  }

  ngOnInit(): void {
  }
  push(){
    this.todoList.push({
      id:1,
      name:this.inputName,
      description:this.inputDescription
    })
  }
  deleteItem(i:Task){
    this.todoList.splice(this.todoList.indexOf(i),1)
  }
}
