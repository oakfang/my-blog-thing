import styled from 'styled-components';
import createRegExDecorator from 'draft-js-regex-decorator';

const Greeting = styled.span`
  background: yellowgreen;
`;

export const helloDecorator = createRegExDecorator(/hello/gi, Greeting);
