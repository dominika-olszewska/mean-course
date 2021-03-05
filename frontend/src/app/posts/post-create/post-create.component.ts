import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Post } from '../post.interface';
import { PostService } from '../services/posts.sevice';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCreateComponent {

  constructor(private postService: PostService) {
  }

  public postMessage(post: Post): void {
    this.postService.addPost(post);
  }
}
