import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mode } from 'src/app/enums/mode';
import { Post } from '../post.interface';
import { PostService } from '../services/posts.sevice';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCreateComponent implements OnInit {
  public post: Post;
  public isLoading = false;
  public mode: string = Mode.CREATE;
  public modeType: typeof Mode = Mode;
  private postId: string;

  constructor(private postService: PostService, public route: ActivatedRoute, private changeDetectionRf: ChangeDetectorRef) {
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('postId')) {
        this.mode = Mode.EDIT;
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.postService.getPost(this.postId).subscribe(postData => {
          this.isLoading = false;
          this.post = { id: postData._id, title: postData.title, content: postData.content };
          this.changeDetectionRf.detectChanges();
        });
      } else {
        this.mode = Mode.CREATE;
        this.postId = null;
      }
    });
  }

  public postMessage(post: Post): void {
    if (this.mode === Mode.CREATE) {
      this.postService.addPost(post);
    } else {
      this.postService.updatePost(this.postId, post);
    }
  }
}
