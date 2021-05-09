import {combineReducers} from 'redux';

import * as ThemeRedux from '../../theme/reducer';

export default combineReducers({
  [ThemeRedux.PATH]: ThemeRedux.reducer,
});