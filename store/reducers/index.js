import { combineReducers } from 'redux';

import app from './app';
import auth from './auth';
import register from './register';
import affiliate from './affiliate';

export default combineReducers({
  app,
  auth,
  register,
  affiliate
});
