import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PostResponse, Post, PostsResponse } from "./post.interface";

@Injectable()
export class PostsApiService {

  constructor(private http: HttpClient) {
  }

  public getPosts(): Observable<PostsResponse> {
    return this.http.get<PostsResponse>("http://localhost:8000/api/posts");
  }

  public addPost(post: Post): Observable<PostResponse> {
    return this.http.post<PostResponse>('http://localhost:8000/api/posts', post);
  }

  public deletePost(id: string): Observable<PostResponse> {
    return this.http.delete<PostResponse>(`http://localhost:8000/api/posts/${id}`);
  }


}
