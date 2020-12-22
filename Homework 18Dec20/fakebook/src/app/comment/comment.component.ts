import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  Task = '';
  comments: String[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  send() {
    if (this.Task) {
      this.comments.push(this.Task)
      this.Task = "";
    }
  }
}
