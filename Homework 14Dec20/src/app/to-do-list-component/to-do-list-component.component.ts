import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.css']
})
export class ToDoListComponentComponent implements OnInit {

  constructor() { }
  list=["coffee","tea"] 
  @Input()
  inputText:string;  
  ngOnInit(): void {
  }
  addList(): void{
    console.log(this.inputText)
    this.list.push(this.inputText)
    console.log(this.list)
  }
  del(item){
    this.list.splice(this.list.indexOf(item),1)
  }

}
