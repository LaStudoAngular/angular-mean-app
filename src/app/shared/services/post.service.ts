import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [];

  constructor() {
    this.posts = [
      {
        title: 'title uno',
        brief: 'lorem ipsum dolor est',
        body: 'lorem ipsum dolor est lorem ipsum dolor est lorem ipsum dolor est',
      },
      {
        title: 'title duo',
        brief: 'lorem ipsum dolor est',
        body: 'lorem ipsum dolor est lorem ipsum dolor est lorem ipsum dolor est',
      },
      {
        title: 'title tre',
        brief: 'lorem ipsum dolor est',
        body: 'lorem ipsum dolor est lorem ipsum dolor est lorem ipsum dolor est',
      },
    ];
  }

  public addPost(post: Post): void {
    this.posts = [...this.posts, post];
  }

  public getAllPosts(): Post[] {
    return [...this.posts];
  }
}
