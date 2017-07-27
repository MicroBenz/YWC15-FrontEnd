import React from 'react';
import { connect } from 'react-redux';

import { actions as authActions } from '../../store/reducers/auth';

const LoginButton = (props) => {
  const { isLogin, major, camperLogin } = props;
  if (isLogin) {
    return <a className="button is-danger">Logout</a>
  }
  return (
    <a className="button is-info" onClick={() => camperLogin(major)}>Login With Facebook {major}</a>
  );
};

export default connect(
  ({ auth }) => ({
    isLogin: auth.isLogin
  }), {
    camperLogin: authActions.camperLogin,
  }
)(LoginButton);
