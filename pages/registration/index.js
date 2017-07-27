import React, { Component } from 'react';
import Router from 'next/router';
import connect from '../../store/connect';

@connect(
  ({ auth, register }) => ({
    major: register.major,
    isLogin: auth.isLogin
  })
)
export default class MainRegistration extends Component {
  componentDidMount() {
    if (!this.props.isLogin) {
      Router.push('/landing', '/');
    }
  }

  render() {
    return (
      <div>
        <h1>Register with {this.props.major}</h1>
      </div>
    );
  }
}
