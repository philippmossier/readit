export type Post = {
  identifier: string;
  title: string;
  body: string;
  slug: string;
  subName: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  // Virtual fields
  url: string;
  voteScore?: number;
  commentCount?: number;
  userVote?: number;
};

export type User = {
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};
