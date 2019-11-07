import styled from 'styled-components';
import createRegExDecorator from 'draft-js-regex-decorator';
import { CompositeDecorator } from 'draft-js';
import { positiveRegex, negativeRegex } from 'utils';

const Positive = styled.span`
  background: lightgreen;
`;

const Negative = styled.span`
  background: red;
`;

export const sentimentDecorator = new CompositeDecorator([
  createRegExDecorator(positiveRegex, Positive),
  createRegExDecorator(negativeRegex, Negative),
]);
