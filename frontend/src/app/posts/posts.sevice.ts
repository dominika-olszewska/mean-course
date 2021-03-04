import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Post } from "./post.interface";
import { PostsApiService } from "./posts-api.service";

@Injectable()
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new BehaviorSubject<Post[]>([]);
  public postsUpdated$: Observable<Post[]> = this.postsUpdated.asObservable();

  constructor(private postApiService: PostsApiService) {

  }

  public getPosts(): void {
    this.postApiService.getPosts().pipe(
      map(postData => {
        return postData.posts.map(post => {
          return {
            title: post.title,
            content: post.content,
            id: post._id
          }
        })
      })
    ).subscribe(transformedPosts => {
      this.posts = transformedPosts;
      this.postsUpdated.next([...this.posts])
    })

  }

  public addPost(post: Post): void {
    this.postApiService.addPost(post).subscribe(responseData => {
      post.id = responseData._id;
      this.posts.push(post);
      this.postsUpdated.next([...this.posts])
    })
  }

  public deletePost(postId: string): void {
    this.postApiService.deletePost(postId).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== postId);
      this.postsUpdated.next([...this.posts]);
    });
  }

}
