import React from 'react';

import colors from '../../utils/colors';

const Square = ({ style }) => (
  <div className="square" style={style}>
    <style jsx>{`
      .square {
        width: 10px;
        height: 10px;
        background-color: ${colors.cyan};
      }
    `}</style>
  </div>
);

const Welcoming = () => (
  <div className="welcoming-container">
    <img src="/static/img/landing/welcoming/free.png" alt="ฟรีตลอดค่าย" className="free-image" />
    <div className="camp-branding">
      <img src="/static/img/landing/welcoming/central_hex.png" className="central-hex" />
      <div className="camp-logo">
        <img src="/static/img/logo.png" alt="YWC15" />
        <div className="slogan-container">
          <div className="square-container">
            <Square style={{ marginRight: '5px' }} />
            <Square style={{ marginRight: '5px' }} />
            <Square />
          </div>
          <div className="slogan-outer-container">
            <div className="slogan-inner-container">
              <h1>DIGITAL INNOVATION</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .welcoming-container {
        position: relative;
        .free-image {
          width: 170px;
          position: absolute;
          top: 0px;
          left: 20px;
        }
        .camp-branding {
          width: 45%;
          margin: 0 auto;
          position: relative;
          .central-hex {
            width: 100%;
          }
          .camp-logo {
            position: absolute;
            left: 18%;
            top: 31%;
            width: 64%;
          }
        }
      }
      .slogan-container {
        {/* position: absolute; */}
        width: 85%;
        margin: 0 auto;
      }
      .square-container {
        display: flex;
        justify-content: flex-end;
        padding-bottom: 7px;
      }
      .slogan-outer-container {
        position: relative;
        &:before {
          display: block;
          content: "";
          width: 50%;
          height: 10px;
          top: -2px;
          left: 0px;
          position: absolute;
          border-top: 4px solid ${colors.cyan};
          border-left: 4px solid ${colors.cyan};
        }
        &:after {
          display: block;
          content: "";
          width: 50%;
          height: 10px;
          position: absolute;
          top: -2px;
          right: 0px;
          border-top: 4px solid ${colors.cyan};
          border-right: 4px solid ${colors.cyan};
        }
        .slogan-inner-container {
          padding: 5px 0px;
          border: 1px solid ${colors.darkCyan};
          &:before {
            display: block;
            content: "";
            width: 50%;
            height: 10px;
            position: absolute;
            bottom: -2px;
            left: 0px;
            border-bottom: 4px solid ${colors.cyan};
            border-left: 4px solid ${colors.cyan};
          }
          &:after {
            display: block;
            content: "";
            width: 50%;
            height: 10px;
            position: absolute;
            bottom: -2px;
            right: 0px;
            border-bottom: 4px solid ${colors.cyan};
            border-right: 4px solid ${colors.cyan};
          }
          h1 {
            font-size: 22px;
          }
        }
      }
    `}</style>
  </div>
);

export default Welcoming;
