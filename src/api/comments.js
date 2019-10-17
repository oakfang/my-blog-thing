import { useState, useEffect } from 'react';
import axios from 'axios';

export function useComments(postId) {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    axios
      .get(`/comments?postId=${postId}&_sort=posted&_order=asc`)
      .catch(() => ({ data: [] }))
      .then(({ data }) => setTimeout(setComments, 600, data));
  }, [postId]);
  const addComment = comment => setComments(comments => [...comments, comment]);
  return { addComment, comments };
}

export async function postComment(author, postId, content) {
  const { data } = await axios.post('/comments', {
    postId,
    content,
    author,
    posted: Date.now(),
  });
  return data;
}
