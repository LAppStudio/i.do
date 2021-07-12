import React from 'react';

import {connect} from 'react-redux';
import Creators from './redux/reducer';

import FloatingNav from '../../Components/FloatingNav';

import Frame from '../../Components/Frame';
import ConnectedListItem from './connectedListItem';
import ConnectedList from './connectedList';
import Modal from '../../Components/Modal';
import ToDoForm from './components/ToDoForm';

import {Container} from './styles';

const RenderItem = (props) => <ConnectedListItem type='todo' {...props}  />;

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

  handleCreate = (forms) => {
    const {create} = this.props;
    create(forms);
  }

  handleSubmit = (forms) => {
    this.handleCreate(forms);
    this.handleHideModal();
  }

  handleDismiss = () => {
    this.handleHideModal();
  }

  render() {
    const {floatingNavVisible, modalVisible} = this.state;
    return(
      <Frame>
        <Container>
          <ConnectedList type='simple-todo' renderItem={RenderItem} {...{keyExtractor}}/>
        </Container>
        <FloatingNav onPlus={this.handleShowModal} visible={floatingNavVisible} />
        <Modal visible={modalVisible}>
          <ToDoForm onSubmit={this.handleSubmit} onDismiss={this.handleDismiss} />
        </Modal>
      </Frame>
    )
  }
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  create: item => dispatch(Creators.create(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);