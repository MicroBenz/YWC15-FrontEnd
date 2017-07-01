import { combineReducers } from 'redux';

import test from './test';
import auth from './auth';

export default combineReducers({
  test,
  auth
});
