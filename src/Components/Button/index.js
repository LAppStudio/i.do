import React from 'react';
import styled from 'styled-components/native';

import useTheme from '../../Hooks/useTheme';

function Button({title = '', onPress, textColor = '#000', backgroundColor='#fff'}) {
  const theme = useTheme();
  return(
    <Container {...theme} {...{onPress, backgroundColor}}>
      <Title {...theme} {...{textColor}}>{title}</Title>
    </Container>
  )
};

const Container = styled.TouchableOpacity`
  height: 45px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({backgroundColor}) => backgroundColor};

  border-radius: ${({measures: {BUTTON}}) => BUTTON.RADIUS}px;
  elevation: ${({measures: {BUTTON}}) => BUTTON.ELEVATION};
  padding: ${({measures: {BUTTON}}) => BUTTON.PADDING}px;
`;

const Title = styled.Text`
  flex: 1;
  text-align: left;
  color: ${({textColor}) => textColor};

  font-size: ${({typography: {BUTTON}}) => BUTTON.SIZE}px;
  font-weight: ${({typography: {BUTTON}}) => BUTTON.WEIGHT};
`;

export default Button;