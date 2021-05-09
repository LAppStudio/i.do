import React from 'react';

import styled from 'styled-components/native';

import Input from '../../../Input';

export default function ToDoType({title = '', checked = false, color: colorName = 'WHITE', onChange,theme}) {
  const {colors, ...themeRest} = theme

  const color = colors.ITEMS[colorName] ?? colors.ITEMS.WHITE;

  return(
    <Container {...{backgroundColor: color, ...themeRest}}>
      <Title {...themeRest}>{title}</Title>
      <Input type='checkbox' {...{checked, onChange}} />
    </Container>
  )
};

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 45px;

  align-items: center;
  

  padding: 10px; 

  border-radius: ${({measures: {ITEM}}) => ITEM.RADIUS}px;
  background-color: ${({backgroundColor}) => backgroundColor};
  elevation: ${({measures: {ITEM}}) => ITEM.ELEVATION};
`;

const Title = styled.Text`
  flex: 1;
  text-align: left;
  font-size: ${({typography: {ITEM}}) => ITEM.SIZE}px;
  font-weight: ${({typography: {ITEM}}) => ITEM.WEIGHT};
`;
