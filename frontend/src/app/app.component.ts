import { PostService } from './posts/posts.sevice';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post, PostsResponse } from './posts/post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string = 'mean-course';

  constructor(private postService: PostService) {

  }

  public ngOnInit(): void {
    this.postService.getPosts();
  }

  public postMessage(post: Post): void {
    this.postService.addPost(post);
  }

}
