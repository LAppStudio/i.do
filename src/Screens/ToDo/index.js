import React from 'react';
import {FlatList} from 'react-native'
import FloatingNav from '../../Components/FloatingNav';

import Frame from '../../Components/Frame';
import ListItem from '../../Components/ListItem';
import ConnectedList from './connectedList';

const RenderItem = (props) => <ListItem type='todo' {...props}  />;

const keyExtractor = ({id}) => `todo-item-${id}`; 

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      floatingNavVisible: true,
    }
  }

  render() {
    const {floatingNavVisible} = this.state;
    return(
      <Frame>
        <ConnectedList type='simple-todo' renderItem={RenderItem} {...{keyExtractor}}/>
        <FloatingNav visible={floatingNavVisible} />
      </Frame>
    )
  }
};

export default ToDo;