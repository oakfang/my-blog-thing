import styled from 'styled-components';
import { CompositeDecorator } from 'draft-js';
import { iterateMatches } from './utils';

const Greeting = styled.span`
  background: yellowgreen;
`;

export const helloDecorator = new CompositeDecorator([
  {
    component: Greeting,
    strategy(contentBlock, callback) {
      for (let { match, index } of iterateMatches(
        /hello/gi,
        contentBlock.getText()
      )) {
        callback(index, index + match.length);
      }
    },
  },
]);
