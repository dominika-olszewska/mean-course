import { PostService } from './../posts.sevice';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {
  public posts$: Observable<Post[]>;

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.postService.postsUpdated$;
  }

  public onDelete(postId: string): void {
    this.postService.deletePost(postId);
  }

}
