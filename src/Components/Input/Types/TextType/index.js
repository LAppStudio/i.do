import React from 'react';

import styled from 'styled-components/native';

function TextType({value = '', onChange, placeholder = '', theme}) {
  return(
    <Container {...{placeholder, onChangeText:onChange, value}} {...theme} />
  )
};

const Container = styled.TextInput.attrs({
  numberOfLines: 1
})`
  height: 40px;
  width: 100%;

  border-radius: ${({measures: {BUTTON}}) => BUTTON.RADIUS}px;
  border-width: ${({measures: {INPUT}}) => INPUT.BORDER}px;

  text-align: left;
  font-weight: ${({typography: {INPUT}}) => INPUT.WEIGHT};
  font-size: ${({typography: {INPUT}}) => INPUT.SIZE}px;
  padding: 10px;
`;

export default TextType;