import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Flex } from 'reflexbox';
import { Editor, convertToRaw } from 'draft-js';

import { Avatar } from 'ui/Avatar';
import { TextBubble } from 'ui/TextBubble';
import { useUser } from 'providers/user';
import { useEditor } from 'ui/CommentBox/use-editor';

const Container = styled(Flex).attrs({
  width: '100%',
  height: '50px',
})`
  .DraftEditor-root {
    overflow-y: auto;
    width: 100%;
    height: 100%;

    .public-DraftEditorPlaceholder-root {
      opacity: 0.3;
      position: absolute;
      z-index: 0;
      pointer-events: none;

      & ~ * {
        z-index: 1;
      }
    }
  }
`;

export function CommentEditor({ addComment }) {
  const user = useUser();
  const { sentiment, reset, hasText, ...editor } = useEditor();
  const onAddComment = () => {
    const content = editor.editorState.getCurrentContent();
    addComment(user, convertToRaw(content));
    reset();
  };
  return (
    <Container>
      <Avatar email={user} size={30} />
      <TextBubble flex={1}>
        <Editor placeholder="What say you?" {...editor} />
      </TextBubble>
      <Button
        variant="contained"
        color="primary"
        disabled={!hasText || sentiment.score < 0}
        onClick={onAddComment}
      >
        Comment
      </Button>
    </Container>
  );
}
