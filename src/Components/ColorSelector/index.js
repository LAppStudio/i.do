import React, { useCallback, useEffect, useState } from 'react';

import {FlatList} from 'react-native';

import styled from 'styled-components/native';

import Input from '../Input';

const DEFAULT_OPTIONS = [
  "WHITE",
  "YELLOW",
  "GREEN",
  "CYAN",
  "BLUE",
  "VIOLET",
  "PINK",
  "RED"
];

function ColorSelector({options: data = DEFAULT_OPTIONS, onChange, value = 'WHITE' }) {
  const [selected, setSelected] = useState(value);

  const handleChange = useCallback(() => {
    if(onChange) onChange(selected);
  },[onChange, selected])

  useEffect(() => {
    handleChange();
  },[selected])

  const renderItem = ({item: color}) => {
    const onPress = () => setSelected(color);
    const checked = color === selected;
    return(
      <ItemContainer>
        <Input type='radio-color' color={color} {...{checked, onPress}} />
      </ItemContainer>
    )
  };

  return(
    <Container>
      <List 
        {...{data, renderItem}}
      />
    </Container>
  )
};

const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const List = styled(FlatList)
  .attrs({
    horizontal: true,
    pagingEnabled: true,
    keyExtractor: (color) => `coloe-item-${color}`,
  })`
`

const ItemContainer = styled.View`
  padding-right: 10px;
`;

export default ColorSelector