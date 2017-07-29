import React, { Component } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';

import connect from '../../store/connect';
import StepOne from '../../component/Register/StepOne';

@connect(
  state => ({
    registerData: state.register,
    isLogin: state.auth.isLogin
  })
)
export default class MainRegistration extends Component {
  static propTypes = {
    registerData: PropTypes.object,
    isLogin: PropTypes.bool
  };

  componentDidMount() {
    if (!this.props.isLogin) {
      // Router.push('/landing', '/');
    }
  }

  render() {
    const { major, currentStep } = this.props.registerData;
    return (
      <div>
        <h1>Current Step {currentStep}</h1>
        <h1>Register with {major}</h1>
        {currentStep === 1 && <StepOne {...this.props.registerData} />}
      </div>
    );
  }
}
