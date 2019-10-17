import React from 'react';

import { useComments, postComment } from 'api';
import { CommentsTombstone } from 'ui/Tombstone';
import { CommentEditor } from './CommentEditor';
import { Comment } from './Comment';

export function CommentBox({ postId }) {
  const { comments, addComment } = useComments(postId);
  if (!comments) {
    return <CommentsTombstone />;
  }
  return (
    <>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <CommentEditor
        addComment={async (author, content) => {
          const comment = await postComment(author, postId, content);
          addComment(comment);
        }}
      />
    </>
  );
}
