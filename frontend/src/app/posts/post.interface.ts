export interface PostsResponse {
  message: string;
  posts?: PostFromBE[];
}

export interface PostResponse {
  message: string;
  _id?: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
}

export interface PostFromBE {
  _id: string;
  title: string;
  content: string;
}
