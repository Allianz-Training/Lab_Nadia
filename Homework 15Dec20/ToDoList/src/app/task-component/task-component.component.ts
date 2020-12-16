import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';


@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent implements OnInit {

  @Input()
  task: Task;

  @Output()
  onDelete: EventEmitter<Task> = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  delete(){
    this.onDelete.emit(this.task)
  }
// page 40-43
}
