import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import commentData from ''
import commentData from './data.json'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interactive-comment';
  listData = commentData;
  commentList : any = [];

  constructor(private router: Router,) { }

  ngOnInit(): void {
    this.commentList = this.listData.comments
    console.log(this.commentList)
  }
}
