import React, { Component } from 'react';
import Link from 'next/link';
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
        <Link href={{ pathname: '/registration' }} as="/register"><a>Go to regis</a></Link>
        <LoginButton major="programmer" />
        <LoginButton major="design" />
        <LoginButton major="marketing" />
        <LoginButton major="content" />
      </div>
    )
  }
}
