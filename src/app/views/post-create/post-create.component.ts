import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mn-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  public postForm = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
  });

  public ngOnInit(): void {}

  public onSubmit(): void {
    if (this.postForm.valid) {
      const { title, body } = this.postForm.value;
      console.log(title, body);
    }
  }
}
