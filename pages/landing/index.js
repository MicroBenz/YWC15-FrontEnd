import React, { Component } from 'react';

import connect from '../../store/connect';
import LoginButton from '../../component/Login/LoginButton';

@connect(
  ({ auth }) => ({
    user: auth.user
  })
)
export default class LandingPage extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        {JSON.stringify(user)}
        <LoginButton role="programmer" />
        <LoginButton role="designer" />
        <LoginButton role="marketing" />
        <LoginButton role="content" />
      </div>
    )
  }
}
