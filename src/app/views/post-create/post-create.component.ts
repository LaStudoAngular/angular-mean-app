import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mn-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private postService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const { title, body } = this.form.value;
      this.form.reset();
      console.log(title, body);
      this.postService.addPost({ title, body });
    }
  }
}
