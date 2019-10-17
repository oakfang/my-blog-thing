import { useState, useCallback, useMemo } from 'react';
import { EditorState, RichUtils } from 'draft-js';

// import { helloDecorator } from 'decorators/hello';
import { getSentimentDecorator } from 'decorators/sentiment';
import { useSentiment } from 'hooks/use-sentiment';

export function useEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const sentiment = useSentiment(
    editorState.getCurrentContent().getPlainText()
  );
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
  const onChange = useCallback(
    editorState => {
      setEditorState(
        EditorState.set(editorState, {
          decorator: getSentimentDecorator(sentiment),
        })
      );
    },
    [sentiment]
  );
  return {
    sentiment,
    reset,
    hasText,
    editorState,
    handleKeyCommand,
    onChange,
  };
}
