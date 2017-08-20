import React from 'react';

import SectionHeader from './SectionHeader';
import colors from '../../utils/colors';

const TimelineItem = props => (
  <div className={`timeline-item ${props.onTime ? 'active' : ''}`}>
    <div className={'role-selector'}>
      <div>
        {
          props.onTime
            ? (<img src={`../../static/img/landing/timeline/timeline-${props.item}.png`} />)
            : (<img src={`../../static/img/landing/timeline/timeline-${props.item}-o.png`} />)
        }
      </div>
    </div>
    <h3 className="title">{'รับสมัคร'}</h3>
    <p className="date">{'วันนี้ - พรุ่งนี้'}</p>
    <style jsx>{`
      h3, p {
        font-family: 'Supermarket';
      }
      .title {
        color: #66fcf1;
        margin: 10px 0 5px;
        font-size: 22px;
      }
      .date {
        font-size: 14px;
      }
      .timeline-item {
        opacity: 0.3;

        &.active {
          opacity: 1;

          h3 {
            color: ${colors.lightCyan};
          }
        }
      }
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

const Timeline = () => (
  <div>
    <SectionHeader title="Timeline" subtitle="ตารางเวลา" />
    <div className="container">
      <div className="columns">
        <div className="column">
          <TimelineItem item={1} onTime />
        </div>
        <div className="column">
          <TimelineItem item={2} onTime={false} />
        </div>
        <div className="column">
          <TimelineItem item={3} onTime={false} />
        </div>
        <div className="column">
          <TimelineItem item={4} onTime={false} />
        </div>
        <div className="column">
          <TimelineItem item={5} onTime={false} />
        </div>
      </div>
    </div>
  </div>
);

export default Timeline;
