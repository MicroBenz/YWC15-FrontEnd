import React, { Component } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';

import connect from '../../store/connect';
import colors from '../../utils/colors';
import Stepper from '../../component/Register/Stepper';
import StepOne from '../../component/Register/StepOne';
import StepTwo from '../../component/Register/StepTwo';
import FullAreaLoader from '../../component/Core/FullAreaLoader';
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
    const { major, currentStep, saving } = registerData;
    return (
      <div className="container">
        <div>
          <Stepper step={currentStep} />
          <div className="step-wrapper">
            <div className="step-inner-wrapper">
              {currentStep === 1 && (
                <StepOne {...registerData} onSubmit={() => proceedStepOne(registerData)} />
              )}
              {currentStep === 2 && (
                <StepTwo {...registerData} onSubmit={() => proceedStepTwo(registerData)} />
              )}
            </div>
            {saving && (
              <div className="loader-wrapper">
                <FullAreaLoader />
              </div>
            )}
            <style jsx global>{`
              .column {
                padding-top: 8px;
                padding-bottom: 0;
                @media(max-width: 768px) {
                  padding-top: 0.75rem;
                }
              }  
            `}</style>
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
                  position: relative;
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
              .loader-wrapper {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgba(0, 0, 0, 0.3);
                pointer-events: auto;
              }
            `}</style>
          </div>
        </div>
      </div>
    );
  }
}
