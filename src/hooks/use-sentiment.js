import { useMemo } from 'react';
import Sentiment from 'sentiment';

const sentiment = new Sentiment();

export function useSentiment(text) {
  return useMemo(() => sentiment.analyze(text), [text]);
}
