import styled from 'styled-components';
import createRegExDecorator from 'draft-js-regex-decorator';
import { CompositeDecorator } from 'draft-js';

const Greeting = styled.span`
  background: yellowgreen;
`;

export const helloDecorator = new CompositeDecorator([
  createRegExDecorator(/hello/gi, Greeting),
]);
