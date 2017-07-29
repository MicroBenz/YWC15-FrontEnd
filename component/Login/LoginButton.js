import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

import { actions as authActions } from '../../store/reducers/auth';
import { actions as registerActions } from '../../store/reducers/register';

const camperLogin = (props) => {
  FB.login((fbResponse) => {
    if (fbResponse) {
      const { accessToken } = fbResponse.authResponse;
      props.loginWithFacebook(accessToken)
        .then(() => props.setField('major', props.major))
        .then(() => props.getRegisterData())
        .then(() => Router.push('/registration', '/register'));
    }
  });
};

const LoginButton = (props) => {
  const { isLogin, major } = props;
  if (isLogin) {
    return <a className="button is-danger">Logout</a>;
  }
  return (
    <a className="button is-info" onClick={() => camperLogin(props)}>Login With Facebook {major}</a>
  );
};

export default connect(
  ({ auth }) => ({
    isLogin: auth.isLogin
  }), {
    ...authActions,
    ...registerActions
  }
)(LoginButton);
