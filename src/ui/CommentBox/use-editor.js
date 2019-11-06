import { useState, useCallback, useMemo } from 'react';
import { EditorState, RichUtils } from 'draft-js';

import { helloDecorator } from 'decorators/hello';

export function useEditor() {
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
  const onChange = editorState => {
    setEditorState(
      EditorState.set(editorState, {
        decorator: helloDecorator,
      })
    );
  };
  return {
    reset,
    hasText,
    editorState,
    handleKeyCommand,
    onChange,
  };
}
