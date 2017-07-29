import actionCreator from '../../utils/actionCreator';
import api from '../../utils/api';

const authAction = actionCreator('auth');
const LOGIN = authAction('LOGIN', true);

const initialState = {
  isLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.RESOLVED: {
      return {
        ...state,
        isLogin: true,
      };
    }
    case LOGIN.REJECTED: {
      return {
        ...state,
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
