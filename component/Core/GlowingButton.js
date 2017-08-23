import React from 'react';

import colors from '../../utils/colors';

const GlowingButton = props => (
  <div {...props}>
    <span>{props.children}</span>
    <style jsx>{`
      div {
        position: relative;
        padding: 8px 0px;
        background-color: #345e62;
        cursor: pointer;
        font-weight: 600;
        transition: background-color 0.5s ease-out;
        &:hover {
          background-color: #253b43;
        }
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
      }
      span {
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
    `}</style>
  </div>
);

export default GlowingButton;
