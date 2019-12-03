import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../../shared/services/post.service';
import { Post } from '../../shared/interfaces/post';

@Component({
  selector: 'mn-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  constructor(private fb: FormBuilder, private postService: PostService) {}

  public postForm = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
  });

  public ngOnInit(): void {}

  public onSubmit(): void {
    if (this.postForm.valid) {
      const { title, body } = this.postForm.value;
      const newPost: Post = {
        title,
        body,
      };
      this.postService.addPost(newPost);
    }
  }
}
