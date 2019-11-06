import styled from 'styled-components';
import { CompositeDecorator } from 'draft-js';
import createRegExDecorator from 'draft-js-regex-decorator';

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
      positiveWordsRegex &&
        createRegExDecorator(positiveWordsRegex, PositiveWord),
      negativeWordsRegex &&
        createRegExDecorator(negativeWordsRegex, NegativeWord),
    ].filter(Boolean)
  );
};
