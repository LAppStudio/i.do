import React from 'react';

import styled from 'styled-components/native';

import useTheme from '../../Hooks/useTheme';

function Card({children}) {
  const theme = useTheme();
  return(
    <Container {...theme}>
      {children}
    </Container>
  )
};

const Container = styled.View`
  flex-direction: column;
  width: 100%;
  max-height: 100%;
  min-height: 30%;

  padding: ${({measures: {CARD}}) => CARD.PADDING}px;
  border-radius: ${({measures: {CARD}}) => CARD.RADIUS}px;
  elevation: ${({measures: {CARD}}) => CARD.ELEVATION};


  background-color: ${({colors: {BACKGROUND}}) => BACKGROUND};
`;

export default Card;