import React from 'react';
import {FlatList} from 'react-native'
import FloatingNav from '../../Components/FloatingNav';

import Frame from '../../Components/Frame';
import ListItem from '../../Components/ListItem';
import ConnectedList from './connectedList';
import Modal from '../../Components/Modal';
import ToDoForm from './components/ToDoForm';

const RenderItem = (props) => <ListItem type='todo' {...props}  />;

const keyExtractor = ({id}) => `todo-item-${id}`; 

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      floatingNavVisible: true,
      modalVisible: false,
    }
  }

  handleShowModal = () => this.setState({modalVisible: true}, 
    () => {this.setState({floatingNavVisible: false});});

  handleHideModal = () => this.setState({modalVisible: false}, 
    () => {this.setState({floatingNavVisible: true});});

  handleSubmit = (forms) => {
    this.handleHideModal();
  }

  handleDismiss = () => {
    this.handleHideModal();
  }

  render() {
    const {floatingNavVisible, modalVisible} = this.state;
    return(
      <Frame>
        <ConnectedList type='simple-todo' renderItem={RenderItem} {...{keyExtractor}}/>
        <FloatingNav onPlus={this.handleShowModal} visible={floatingNavVisible} />
        <Modal visible={modalVisible}>
          <ToDoForm onSubmit={this.handleSubmit} onDismiss={this.handleDismiss} />
        </Modal>
      </Frame>
    )
  }
};

export default ToDo;