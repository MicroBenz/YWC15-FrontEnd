import React from 'react';

import colors from '../../utils/colors';

const FrameBox = props => (
  <div className={`framebox-wrapper ${props.center ? 'center' : ''}`}>
    <div className="framebox-inner-wrapper">
      {props.children}
    </div>
    <style jsx>{`
      .center {
        margin: 0 auto;
      }
      .framebox-wrapper {
        border: 1px solid ${colors.cyan};
        position: relative;
        width: fit-content;
        &:before {
          display: block;
          content: "";
          width: 10px;
          height: 10px;
          top: -2px;
          left: -2px;
          position: absolute;
          border-top: 4px solid ${colors.cyan};
          border-left: 4px solid ${colors.cyan};
        }
        &:after {
          display: block;
          content: "";
          width: 10px;
          height: 10px;
          position: absolute;
          top: -2px;
          right: -2px;
          border-top: 4px solid ${colors.cyan};
          border-right: 4px solid ${colors.cyan};
        }
        .framebox-inner-wrapper {
          &:before {
            display: block;
            content: "";
            width: 10px;
            height: 10px;
            position: absolute;
            bottom: -2px;
            left: -2px;
            border-bottom: 4px solid ${colors.cyan};
            border-left: 4px solid ${colors.cyan};
          }
          &:after {
            display: block;
            content: "";
            width: 10px;
            height: 10px;
            position: absolute;
            bottom: -2px;
            right: -2px;
            border-bottom: 4px solid ${colors.cyan};
            border-right: 4px solid ${colors.cyan};
          }
        }
      }
    `}</style>
  </div>
);

export default FrameBox;
