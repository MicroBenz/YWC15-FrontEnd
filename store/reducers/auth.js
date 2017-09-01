import actionCreator from '../../utils/actionCreator';
import api from '../../utils/api';

const authAction = actionCreator('auth');
const LOGIN = authAction('LOGIN', true);

const initialState = {
  isLogin: false,
  isLoggingIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.PENDING: {
      return {
        ...state,
        isLoggingIn: true,
        isLogin: false
      };
    }
    case LOGIN.RESOLVED: {
      return {
        ...state,
        isLoggingIn: false,
        isLogin: true,
      };
    }
    case LOGIN.REJECTED: {
      return {
        ...state,
        isLoggingIn: false,
        isLogin: false
      };
    }
    default: return state;
  }
};

export const actions = {
  loginWithFacebook: accessToken => ({
    type: LOGIN,
    promise: api.post('/auth/login', { accessToken })
      .then(({ data: { token } }) => window.localStorage.setItem('ywc15Token', token))
  }),
};
