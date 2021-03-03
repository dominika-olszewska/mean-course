import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


export interface PostResponse {
  message: string;
  posts?: Post[];
}

export interface Post {
  id: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string = 'mean-course';
  public posts: Post[] = [];

  constructor(private http: HttpClient) {

  }

  public ngOnInit(): void {
    this.http.get<PostResponse>('http://localhost:8000/api/posts').subscribe(response => {
      this.posts = response.posts;
    }

    );
  }

  public postMessage(): void {
    const post: Post= {
      id: '1234',
      title: 'Third server-side post',
      content: 'This is coming from the angular app',
    };
    this.http.post<PostResponse>('http://localhost:8000/api/posts', post).subscribe(resonse => {
      console.log('response', resonse);
    });
  }

}
