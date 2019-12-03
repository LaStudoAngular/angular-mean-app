import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [
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
  private postSource$ = new BehaviorSubject<Post[]>(this.posts);

  constructor() {}

  public addPost(post: Post): void {
    const newPost = {
      ...post,
      brief: 'lorem ipsum dolor est',
    };
    this.posts = [...this.posts, newPost];
    this.postSource$.next(this.posts);
  }

  public getAllPosts(): Observable<Post[]> {
    return this.postSource$;
  }
}
