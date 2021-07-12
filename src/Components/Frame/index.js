import React from 'react';

import styled from 'styled-components/native';

import useTheme from '../../Hooks/useTheme';

const Frame = ({children}) => {
  const theme = useTheme();

  return (
    <Container {...theme}>{children}</Container>
  );
}

const Container = styled.View`
  height: 100%;
  width: 100%;

  flex-direction: column;

  background-color: ${({colors}) => colors.BACKGROUND};
`;

export default Frame;
