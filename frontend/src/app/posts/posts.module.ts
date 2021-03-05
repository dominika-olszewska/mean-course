import { PostCreateComponent } from './post-create/post-create.component';
import { PostsApiService } from './services/posts-api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFormComponent } from './post-form/post-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './services/posts.sevice';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [PostFormComponent, PostListComponent, PostCreateComponent, PostComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  // exports: [PostListComponent],
  providers: [PostService, PostsApiService]
})
export class PostsModule { }
