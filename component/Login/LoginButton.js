import React from 'react';
import { connect } from 'react-redux';

import { actions as authActions } from '../../store/reducers/auth';

const LoginButton = (props) => {
  const { isLogin, role, camperLogin } = props;
  if (isLogin) {
    return <a className="button is-danger">Logout</a>
  }
  return (
    <a className="button is-info" onClick={() => camperLogin(role)}>Login With Facebook {role}</a>
  );
};

export default connect(
  ({ auth }) => ({
    isLogin: auth.isLogin
  }), {
    camperLogin: authActions.camperLogin,
  }
)(LoginButton);
