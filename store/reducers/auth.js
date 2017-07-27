import Router from 'next/router';

import actionCreator from '../../utils/actionCreator';
import api from '../../utils/api';
import { actions as registerActions } from './register';

const authAction = actionCreator('auth');
const LOGIN_PENDING = authAction('LOGIN_PENDING');
const LOGIN_RESOLVED = authAction('LOGIN_RESOLVED');
const LOGIN_REJECTED = authAction('LOGIN_REJECTED');

const initialState = {
  isLogin: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_RESOLVED:
      return {
        ...state,
        user: action.user,
        isLogin: true
      };
    default: return state;
  }
};

export const actions = {
  loginSuccess: user => ({
    type: LOGIN_RESOLVED,
    user,
  }),
  camperLogin: major => (dispatch) => {
    FB.login((fbResponse) => {
      if (fbResponse) {
        const { accessToken } = fbResponse.authResponse;
        api.post('/auth/login', { accessToken })
          .then(({ token }) => {
            window.localStorage.setItem('ywc15Token', token);
            return api.get('/auth/me');
          })
          .then((user) => {
            dispatch(actions.loginSuccess(user));
            dispatch(registerActions.setField('major', major));
            Router.push('/registration', '/register');
          });
      }
    });
  }
};
