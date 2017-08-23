import React from 'react';

import colors from '../../utils/colors';

const Parallelogram = ({ style }) => (
  <div className="parallelogram" style={style}>
    <style jsx>{`
      .parallelogram {
        display: inline-block;
        width: 16px;
        height: 16px;
        -webkit-transform: skew(-20deg);
        background-color: #49a29e;
      }
    `}</style>
  </div>
);

const Circle = ({ style }) => (
  <div className="circle" style={style}>
    <style jsx>{`
      .circle {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-color: ${colors.cyan};
        border-radius: 50%;
        {/* margin-right: 15px; */}
      }  
    `}</style>
  </div>
);

const Semicolon = ({ style }) => (
  <div className="semicolon-container" style={style}>
    <div className="semicolon-wrapper">
      <div className="square" />
      <div className="square middle" />
      <div className="square" />
    </div>
    <style jsx>{`
      .semicolon-container {
        display: inline-block;
      }
      .square {
        width: 4px;
        height: 4px;
        background-color: ${colors.cyan};
        &.middle {
          margin: 2px 0px;
        }
      }
    `}</style>
  </div>
);

const BorderedSqaure = ({ style }) => (
  <div className="bordered-square" style={style}>
    <style jsx>{`
      .bordered-square {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-color: ${colors.cyan};
        border: 3.5px solid #49a29e;
      }
    `}</style>
  </div>
);

const HeaderArtwork = () => (
  <div className="header-artwork">
    <div className="left-zone">
      <Circle style={{ marginRight: '6px' }} />
      <Semicolon style={{ marginRight: '8px' }} />
      <Parallelogram style={{ marginRight: '5px' }} />
      <Parallelogram style={{ marginRight: '5px' }} />
      <Parallelogram style={{ marginRight: '5px' }} />
      <Parallelogram />
    </div>
    <div className="right-zone">
      <BorderedSqaure />
    </div>
    <style jsx>{`
      .header-artwork {
        display: flex;
        .left-zone, .right-zone {
          display: flex;
          height: 100%;
        }
        .right-zone {
          flex: 1;
          justify-content: flex-end;
        }
      }
    `}</style>
  </div>
);

export default HeaderArtwork;
