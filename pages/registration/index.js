import React, { Component } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';

import connect from '../../store/connect';
import colors from '../../utils/colors';
import Stepper from '../../component/Register/Stepper';
import StepOne from '../../component/Register/StepOne';
import StepTwo from '../../component/Register/StepTwo';
import { actions as registerActions } from '../../store/reducers/register';

@connect(
  state => ({
    registerData: state.register,
    isLogin: state.auth.isLogin
  }),
  { ...registerActions }
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
    const { proceedStepOne, proceedStepTwo, registerData } = this.props;
    const { major, currentStep } = registerData;
    return (
      <div className="container">
        <div>
          <Stepper step={currentStep} />
          <div className="step-wrapper">
            <div className="step-inner-wrapper">
              {currentStep === 1 && <StepOne {...registerData} onSubmit={() => proceedStepOne(registerData)} />}
              {currentStep === 2 && <StepTwo {...registerData} onSubmit={() => proceedStepTwo(registerData)} />}
            </div>
            <style jsx>{`
              .step-wrapper {
                position: relative;
                pointer-events: none;
                @media(max-width: 768px) {
                  margin: 15px 20px;
                }
                &:before {
                  display: block;
                  content: "";
                  width: 50%;
                  height: 25%;
                  left: 0px;
                  position: absolute;
                  border-top: 4px solid ${colors.cyan};
                  border-left: 4px solid ${colors.cyan};
                }
                &:after {
                  display: block;
                  content: "";
                  width: 50%;
                  height: 25%;
                  position: absolute;
                  top: 0px;
                  right: 0px;
                  border-top: 4px solid ${colors.cyan};
                  border-right: 4px solid ${colors.cyan};
                }
                .step-inner-wrapper {
                  padding: 20px;
                  border: 1px solid #83beea;
                  &:before {
                    display: block;
                    content: "";
                    width: 50%;
                    height: 25%;
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    border-bottom: 4px solid ${colors.cyan};
                    border-left: 4px solid ${colors.cyan};
                  }
                  &:after {
                    display: block;
                    content: "";
                    width: 50%;
                    height: 25%;
                    position: absolute;
                    bottom: 0px;
                    right: 0px;
                    border-bottom: 4px solid ${colors.cyan};
                    border-right: 4px solid ${colors.cyan};
                  }
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    );
  }
}
