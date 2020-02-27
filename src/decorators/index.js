import { CompositeDecorator } from 'draft-js';
import styled from 'styled-components';
import { helloDecorator } from './hello';
import { createSentimentDecorators } from 'untrigger';

const Negative = styled.span`
  color: red;
  text-decoration: line-through;
`;

const Positive = styled.span`
  color: green;
`;

export default new CompositeDecorator([
  helloDecorator,
  ...createSentimentDecorators({
    negativeComponent: Negative,
    positiveComponent: Positive,
  }),
]);
