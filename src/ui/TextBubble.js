import styled from 'styled-components';
import { Box } from 'reflexbox';

export const TextBubble = styled(Box).attrs({ p: '10px', ml: '20px' })`
  position: relative;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  &:before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid rgba(0, 0, 0, 0.1);
    border-top: 10px solid rgba(0, 0, 0, 0.1);
    border-bottom: 10px solid transparent;
    left: -20px;
    top: 15px;
  }
`;
