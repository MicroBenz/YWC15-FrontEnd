import { combineReducers } from 'redux';

import app from './app';
import auth from './auth';
import register from './register';

export default combineReducers({
  app,
  auth,
  register
});
