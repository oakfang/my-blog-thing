import Sentiment from 'sentiment';
import { useMemo } from 'react';

const analyzer = new Sentiment();

export function useSentiment(text) {
  return useMemo(() => {
    return analyzer.analyze(text);
  }, [text]);
}
