import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const core = [CommonModule, ReactiveFormsModule, FormsModule];

@NgModule({
  declarations: [],
  imports: [...core],
  exports: [...core],
})
export class CoreModule {}
