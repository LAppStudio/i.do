import React, {useReducer, Fragment, useCallback} from 'react';

import {reducer, INITIAL_STATE, Creators} from './reducer';

import FloatingNav from '../../Components/FloatingNav';
import Modal from '../../Components/Modal';
import ToDoForm from '../../Screens/ToDo/components/ToDoForm';

function CreateModal({children, onSubmit, onDismiss, onShow}){
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE,)

    const handleShowModal = useCallback(() => {
        dispatch(Creators.show());
    },[dispatch]);

    const handleDismissModal = useCallback(() => {
        dispatch(Creators.hide());
        if(onDismiss) onDismiss();
    },[dispatch, onDismiss]);

    const handleSubmit = useCallback(() => {
        dispatch(Creators.hide());
        if(onSubmit) onSubmit();
    },[dispatch, onSubmit])

    return(
        <Fragment>
            <FloatingNav onPlus={handleShowModal} visible={!state.visible} />
            <Modal visible={state.visible} >
                <ToDoForm onDismiss={handleDismissModal} onSubmit={handleSubmit} />
            </Modal>
            {children}
        </Fragment>
    );
};

export default CreateModal;