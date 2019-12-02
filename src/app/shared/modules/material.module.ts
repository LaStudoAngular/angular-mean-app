import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatListModule,
  MatExpansionModule,
} from '@angular/material';

const materialParts = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatListModule,
  MatExpansionModule,
];

@NgModule({
  declarations: [],
  imports: [...materialParts],
  exports: [...materialParts],
})
export class MaterialModule {}
