import { useState, useEffect } from 'react';
import axios from 'axios';

export function usePosts() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    axios.get('/posts').then(({ data }) => setTimeout(setPosts, 600, data));
  }, []);
  return posts;
}