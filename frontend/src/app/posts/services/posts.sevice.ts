import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Post, PostResponse } from "../post.interface";
import { PostsApiService } from "./posts-api.service";

@Injectable()
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new BehaviorSubject<Post[]>([]);
  public postsUpdated$: Observable<Post[]> = this.postsUpdated.asObservable();

  constructor(private postApiService: PostsApiService, private router: Router) {

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

  public getPost(id: string): Observable<PostResponse> {
    return this.postApiService.getPost(id);
  }

  public updatePost(postId: string, postData: Post): void {
    const post: Post = { id: postId, title: postData.title, content: postData.content };

    this.postApiService.updatePost(postId, post).subscribe(response => {
      const updatedPosts = [...this.posts];
      const oldPostIndex = updatedPosts.findIndex(p => p.id === post.id);
      updatedPosts[oldPostIndex] = post;
      this.posts = updatedPosts;
      this.postsUpdated.next([...this.posts]);
      this.router.navigate(["/"]);

    });
  }

  public addPost(post: Post): void {
    const postData = new FormData();
    postData.append('title', post.title);
    postData.append('content', post.content);
    postData.append('image', post.image, post.title);

    this.postApiService.addPost(postData).subscribe(responseData => {
      post.id = responseData._id;
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
      this.router.navigate(["/"]);
    })
  }

  public deletePost(postId: string): void {
    this.postApiService.deletePost(postId).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== postId);
      this.postsUpdated.next([...this.posts]);
    });
  }

}
