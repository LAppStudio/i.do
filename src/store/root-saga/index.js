import {all} from 'redux-saga/effects';

import ToDoSaga from '../../Screens/ToDo/redux/sagas';

export default function* () {
  return yield all([ToDoSaga()]);
}