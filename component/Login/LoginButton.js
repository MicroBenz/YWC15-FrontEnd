import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

import { actions as authActions } from '../../store/reducers/auth';
import { actions as registerActions } from '../../store/reducers/register';
import GlowingButton from '../Core/GlowingButton';
import Loader from '../Core/Loader';

const camperLogin = (props) => {
  FB.login((fbResponse) => {
    if (fbResponse) {
      const { accessToken } = fbResponse.authResponse;
      props.loginWithFacebook(accessToken)
        .then(() => props.setField('major', props.major))
        .then(() => props.getRegisterData())
        .then(() => Router.push('/registration', '/register/step1'));
    }
  });
};

const LoginButton = (props) => {
  const { isLogin, isLoggingIn } = props;
  return (
    <GlowingButton
      style={{ width: '160px', margin: '0 auto' }}
      onClick={isLoggingIn ? null : () => camperLogin(props)}
    >{isLoggingIn || isLogin ? <Loader size={15} /> : 'APPLY NOW'}</GlowingButton>
  );
};

export default connect(
  ({ auth }) => ({
    isLogin: auth.isLogin,
    isLoggingIn: auth.isLoggingIn
  }), {
    ...authActions,
    ...registerActions
  }
)(LoginButton);
