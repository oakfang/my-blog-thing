import React from 'react';
import { Post } from 'ui/Post';

export function PostList({ posts }) {
  return posts.map(post => <Post key={post.id} post={post} />);
}
