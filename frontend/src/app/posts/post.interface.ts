export interface PostsResponse {
  message: string;
  posts?: Post[];
}

export interface PostResponse {
  message: string;
  id?: string;
}

export interface Post {
  id?: string;
  title: string;
  content: string;
}