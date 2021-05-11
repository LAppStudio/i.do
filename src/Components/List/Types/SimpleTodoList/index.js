import React from 'react';

import {FlatList} from 'react-native';

import styled from 'styled-components/native';


export default function SimpleTodoList({data = [], renderItem: RenderItem = () => null, keyExtractor = (_,index) => `todo-item-${index}`,  theme}) {
  const Item = ({item, index}) => (
    <ItemContainer {...theme}>
      <RenderItem {...item}  />
    </ItemContainer>

  )
  
  return(
    <List
      renderItem={Item}
      {...{data, ItemSeparatorComponent, keyExtractor}}
      {...theme}
    />
  )
};


const ItemContainer = styled.View`
  display: flex;
  flex: 1;
  width: 100%;
  padding-horizontal: 20px;
`;

const ItemSeparatorComponent = styled.View`
  height: 15px;
`;

const List = styled.FlatList.attrs({
  ItemSeparatorComponent
})`
  padding-vertical: 20px;
`;