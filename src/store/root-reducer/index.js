import {combineReducers} from 'redux';

import * as ThemeRedux from '../../theme/reducer';
import * as ToDoRedux from '../../Screens/ToDo/redux/reducer';

export default combineReducers({
  [ThemeRedux.PATH]: ThemeRedux.reducer,
  [ToDoRedux.PATH]: ToDoRedux.reducer,
});