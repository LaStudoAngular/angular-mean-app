import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mn-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onAddPost(): void {
    console.log(`click`);
  }
}
