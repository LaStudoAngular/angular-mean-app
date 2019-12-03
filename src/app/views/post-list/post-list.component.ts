import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/interfaces/post';
import { PostService } from '../../shared/services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'mn-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  public posts$: Observable<Post[]>;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getAllPosts();
  }
}
