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
          <div className="info">
            <h1 className="camp-date">4-7 JANUARY 2018</h1>
            <h2 className="camp-location">@Assumption University (Bangna)</h2>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .welcoming-container {
        position: relative;
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

            img {
              width: 60%;
            }
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
            font-size: 26px;
            letter-spacing: 1.8px;
          }
        }
      }

      .info {
        .camp-date {
          font-family: 'supermarket';
          font-size: 42px;
          margin: 0;
          line-height: 1em;
          padding-top: 14px;
        }
        .camp-location {
          font-family: 'supermarket';
          font-size: 22px;
          margin: 0;
        }
      }
    `}</style>
  </div>
);

export default Welcoming;
