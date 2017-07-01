import actionCreator from '../../utils/actionCreator';
import api from '../../utils/api';

const authAction = actionCreator('auth');
const LOGIN_PENDING = authAction('LOGIN_PENDING');
const LOGIN_RESOLVED = authAction('LOGIN_RESOLVED');
const LOGIN_REJECTED = authAction('LOGIN_REJECTED');

const initialState = {
  isLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_RESOLVED:
      return {
        ...state,
        role: action.role,
        token: action.token,
        isLogin: true
      };
    default: return state;
  }
}

export const actions = {
  loginSuccess: (role, token) => ({
    type: LOGIN_RESOLVED,
    role,
    token,
  }),
  camperLogin: (role) => (dispatch) => {
    FB.login((fbResponse) => {
      if (fbResponse) {
        const { accessToken } = fbResponse.authResponse;
        api.post('/auth/login/camper', { role }, { 'Authorization': `Bearer ${accessToken}`})
          .then((token) => dispatch(actions.loginSuccess(role, token)));
      }
    })
  }
}
