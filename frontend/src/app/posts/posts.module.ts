import { PostsApiService } from './posts-api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './posts.sevice';



@NgModule({
  declarations: [PostComponent, PostListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [PostComponent, PostListComponent],
  providers: [PostService, PostsApiService]
})
export class PostsModule { }
