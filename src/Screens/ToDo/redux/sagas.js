import {all, select, put, takeLatest} from 'redux-saga/effects';
import Creators, {Selectors, Types} from './reducer';

import mock from '../../../mocks/todo.json';

function* createSaga({item = {}}){
  try {

    const items = yield select(Selectors.items);
    const itemsValues = yield select(Selectors.itemsValues);
    const itemsKeys = yield select(Selectors.itemsKeys);
    
    const id = `${items.length}-${Math.random()}`;

    const newItem = {id, ...item};

    console.log('CREATE SAGA', newItem);
    return yield put(Creators.createSuccess({
      items: [...items, newItem],
      itemsValues:{...itemsValues, [id]: false},
      itemsKeys: {...itemsKeys, [id]: false}
    }))

  } catch (error) {
    return yield put(Creators.createError())
  }
};

function* deleteSaga({itemKey}) {
  try {
    console.log('delete SAGA', mockedValues.itemsValues);
    return yield put(Creators.deleteError())
  } catch (error) {
    return yield put(Creators.deleteError())
  }
};

function* updateSaga({item}) {
  try {
    return yield put(Creators.updateError())
  } catch (error) {
    return yield put(Creators.updateError())
  }
}

function* updateCheckSaga({itemKey, value}) {
  try {
    return yield put(Creators.updateCheckError())
  } catch (error) {
    return yield put(Creators.updateCheckError())
  }
};

export default function*() {
  return yield all([
    takeLatest(Types.create, createSaga),
    takeLatest(Types.delete, deleteSaga),
    takeLatest(Types.update, updateSaga),
    takeLatest(Types.updateCheck, updateCheckSaga),
  ])
};