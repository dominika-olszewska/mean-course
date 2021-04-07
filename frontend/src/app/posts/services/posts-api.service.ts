import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PostApiResponse, Post, PostsApiResponse, PostResponse } from "../post.interface";

@Injectable()
export class PostsApiService {

  constructor(private http: HttpClient) {
  }

  public getPosts(): Observable<PostsApiResponse> {
    return this.http.get<PostsApiResponse>("http://localhost:8000/api/posts");
  }

  public addPost(post: FormData): Observable<PostApiResponse> {
    return this.http.post<PostApiResponse>('http://localhost:8000/api/posts', post);
  }

  public getPost(id: string): Observable<PostResponse> {
    return this.http.get<PostResponse>(`http://localhost:8000/api/posts/${id}`);
  }

  public updatePost(id: string, post: Post): Observable<PostApiResponse> {
    return this.http.put<PostApiResponse>(`http://localhost:8000/api/posts/${id}`, post);
  }

  public deletePost(id: string): Observable<PostApiResponse> {
    return this.http.delete<PostApiResponse>(`http://localhost:8000/api/posts/${id}`);
  }


}
