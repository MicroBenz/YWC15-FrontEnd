import React, { Component } from 'react';

import connect from '../../store/connect';
import LoginButton from '../../component/Login/LoginButton';

@connect(
  ({ test }) => ({
    test: test.shouldBeOne
  })
)
export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <LoginButton role="programmer" />
        <LoginButton role="designer" />
        <LoginButton role="marketing" />
        <LoginButton role="content" />
      </div>
    )
  }
}
