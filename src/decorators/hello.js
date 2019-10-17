import styled from 'styled-components';
import { CompositeDecorator } from 'draft-js';
import { decorateRegex } from './utils';

const Greeting = styled.span`
  background: yellowgreen;
`;

export const helloDecorator = new CompositeDecorator([
  {
    component: Greeting,
    strategy: decorateRegex(/hello/gi),
  },
]);
