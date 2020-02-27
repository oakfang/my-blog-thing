import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { useSentimentAnalysis } from 'untrigger'
import { Flex } from 'reflexbox';
import { Editor, convertToRaw, EditorState, RichUtils } from 'draft-js';

import { hasNonWhitespace } from 'utils';
import { Avatar } from 'ui/Avatar';
import { TextBubble } from 'ui/TextBubble';
import { useUser } from 'providers/user';
import decorator from 'decorators';

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

function useEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const currentText = editorState.getCurrentContent().getPlainText();
  const { score } = useSentimentAnalysis(currentText);
  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };
  const reset = () => setEditorState(EditorState.createEmpty());
  const hasText = hasNonWhitespace(currentText);
  const onChange = editorState => {
    setEditorState(
      EditorState.set(editorState, {
        decorator,
      })
    );
  };
  return {
    reset,
    hasText,
    editorState,
    handleKeyCommand,
    onChange,
    score,
  };
}

export function CommentEditor({ addComment }) {
  const user = useUser();
  const { score, reset, hasText, ...editor } = useEditor();
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
        disabled={!hasText || score < 0}
        onClick={onAddComment}
      >
        Comment
      </Button>
    </Container>
  );
}
