export interface PostsApiResponse {
  message: string;
  posts?: PostResponse[];
}

export interface PostApiResponse {
  message: string;
  _id?: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  image?: File;
}

export interface PostResponse {
  _id: string;
  title: string;
  content: string;
}
