import styled from 'styled-components';
import createRegExDecorator from 'draft-js-regex-decorator';

const Greeting = styled.span`
  background: yellowgreen;
  text-decoration: underline;
`;

export const helloDecorator = createRegExDecorator(/meow/gi, Greeting);
