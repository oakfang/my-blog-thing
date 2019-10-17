import React from 'react';
import Gravatar from 'react-gravatar';
import styled from 'styled-components';

const AvatarContainer = styled.div`
  border-radius: 100%;
  overflow: hidden;
  box-sizing: border-box;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
`;

export function Avatar({ email, size = 150 }) {
  return (
    <AvatarContainer size={size}>
      <Gravatar size={size} email={email} />
    </AvatarContainer>
  );
}
