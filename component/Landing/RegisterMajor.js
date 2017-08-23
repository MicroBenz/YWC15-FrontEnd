import React from 'react';

import HeaderArtwork from './HeaderArtwork';
import GlowingText from '../Core/GlowingText';
import LoginButton from '../Login/LoginButton';
import colors from '../../utils/colors';
import content from './content.json';

const RegisterMajor = ({ major, count = 0 }) => (
  <div className="role-selector">
    <div>
      <HeaderArtwork />
      <img src={`/static/img/roles/${major}.png`} alt={major} />
      <GlowingText>{content.major[major].title}</GlowingText>
      <h2 className="registrant-count"><span>{count}</span> คน</h2>
      <h3>{content.major[major].description}</h3>
      <p className="detail">[ รายละเอียด ]</p>
      <LoginButton major={major} />
    </div>
    <style jsx>{`
      .role-selector {
        border: 1px solid ${colors.cyan};
        padding: 18px 15px;
        position: relative;
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
        div {
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
      h3, p {
        font-family: 'Supermarket';
      }
      .registrant-count {
        font-size: 20px;
        font-family: 'Supermarket';
        color: ${colors.lightCyan};
        line-height: 35px;
        padding-top: 25px;
        span {
          font-size: 60px;
          font-weight: 600;
        }
      }
      .detail {
        padding-bottom: 20px;
      }
    `}</style>
  </div>
);

export default RegisterMajor;
