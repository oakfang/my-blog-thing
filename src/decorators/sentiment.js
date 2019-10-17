import styled from 'styled-components';
import { CompositeDecorator } from 'draft-js';
import { decorateRegex } from './utils';

const PositiveWord = styled.span`
  color: green;
`;

const NegativeWord = styled.span`
  color: red;
`;

function getWordListRegex(list) {
  return (
    list.length && new RegExp(list.map(word => `(${word})`).join('|'), 'gi')
  );
}

export const getSentimentDecorator = sentiment => {
  const positiveWordsRegex = getWordListRegex(sentiment.positive);
  const negativeWordsRegex = getWordListRegex(sentiment.negative);
  return new CompositeDecorator(
    [
      positiveWordsRegex && {
        component: PositiveWord,
        strategy: decorateRegex(positiveWordsRegex),
      },
      negativeWordsRegex && {
        component: NegativeWord,
        strategy: decorateRegex(negativeWordsRegex),
      },
    ].filter(Boolean)
  );
};
