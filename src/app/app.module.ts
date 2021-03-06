import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './views/post-create/post-create.component';
import { PostListComponent } from './views/post-list/post-list.component';
import { PostItemComponent } from './views/post-item/post-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';
import { HeaderComponent } from './components/header/header.component';
import { CoreModule } from './shared/modules/core.module';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostListComponent,
    PostItemComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
