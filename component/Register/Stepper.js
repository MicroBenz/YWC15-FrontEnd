import React from 'react';

import colors from '../../utils/colors';

const Stepper = props => (
  <div className="stepper-text-wrapper">
    <h1 className="step-title">STEP {props.step}</h1>
    <h2 className="step-label">ข้อมูลการติดต่อ</h2>
    <style jsx>{`
      .stepper-text-wrapper {
        padding: 15px 0;
        .step-title {
          font-family: 'Agency FB';
          font-weight: 600;
          font-size: 48px;
          line-height: 46px;
          color: ${colors.cyan};
          letter-spacing: 3px;
        }
        .step-label {
          font-family: 'Cordia New';
          font-size: 24px;
          font-weight: 600;
        }
      }
    `}</style>
  </div>
);

export default Stepper;
