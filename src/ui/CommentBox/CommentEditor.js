import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Flex } from 'reflexbox';
import { Editor, convertToRaw, EditorState, RichUtils } from 'draft-js';

import { Avatar } from 'ui/Avatar';
import { TextBubble } from 'ui/TextBubble';
import { useUser } from 'providers/user';

function useEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const handleKeyCommand = useCallback((command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  }, []);
  const reset = useCallback(() => {
    setEditorState(EditorState.createEmpty());
  }, []);
  const hasText = useMemo(
    () =>
      !!editorState
        .getCurrentContent()
        .getPlainText()
        .replace(/\s/g, '').length,
    [editorState]
  );
  return {
    reset,
    hasText,
    editorState,
    handleKeyCommand,
    onChange: setEditorState,
  };
}

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
  const { reset, hasText, ...editor } = useEditor();
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
        disabled={!hasText}
        onClick={onAddComment}
      >
        Comment
      </Button>
    </Container>
  );
}