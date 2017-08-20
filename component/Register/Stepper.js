import React from 'react';

import colors from '../../utils/colors';

const Parallelogram = ({ style, active }) => (
  <div className={`parallelogram ${active && 'active'}`} style={style}>
    <style jsx>{`
      .parallelogram {
        display: inline-block;
        width: 13px;
        height: 16px;
        margin-right: 3px;
        -webkit-transform: skew(-20deg);
        background-color: ${colors.lightCyan};
        &.active {
          background-color: ${colors.cyan};
        }
      }
    `}</style>
  </div>
);

const ShortParallelogram = ({ active }) => (
  <div style={{ display: 'flex' }}>
    <Parallelogram active={active} />
    <Parallelogram active={active} />
    <Parallelogram active={active} />
  </div>
);

const LongParallelogram = ({ active }) => (
  <div style={{ display: 'flex' }}>
    <Parallelogram active={active} />
    <Parallelogram active={active} />
    <Parallelogram active={active} />
    <Parallelogram active={active} />
    <Parallelogram active={active} />
    <Parallelogram active={active} />
    <Parallelogram active={active} />
    <Parallelogram active={active} />
    <Parallelogram active={active} />
    <Parallelogram active={active} />
    <Parallelogram active={active} />
  </div>
);

const CircleStepper = ({ active = false }) => (
  <div className="circle">
    {active && <div className="inside-circle" />}
    <style jsx>{`
      .circle {
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid ${colors.cyan};
        background-color: transparent;
        border-radius: 50%;
        position: relative;
        margin-left: 6px;
        margin-right: 6px;
      }
      .inside-circle {
        display: inline-block;
        width: 14px;
        height: 14px;
        background-color: ${colors.cyan};
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
    `}</style>
  </div>
);

const Stepper = ({ step }) => (
  <div>
    <div className="stepper-wrapper">
      <div className="step step-one">
        <ShortParallelogram active={step >= 1} />
        <CircleStepper active={step >= 1} />
      </div>
      <div className="step step-two">
        <LongParallelogram active={step >= 2} />
        <CircleStepper active={step >= 2} />
      </div>
      <div className="step step-three">
        <LongParallelogram active={step >= 3} />
        <CircleStepper active={step >= 3} />
      </div>
      <div className="step step-four">
        <LongParallelogram active={step >= 4} />
        <CircleStepper active={step >= 4} />
      </div>
      <div className="step step-five">
        <LongParallelogram active={step >= 5} />
        <CircleStepper active={step >= 5} />
      </div>
    </div>
    <div className="stepper-text-wrapper">
      <h1 className="step-title">STEP {step}</h1>
      <h2 className="step-label">{
        (() => {
          switch (step) {
            case 1:
              return 'ข้อมูลส่วนตัว';
            case 2:
              return 'ข้อมูลการติดต่อ';
            default:
              return 'ยังไม่มี';
          }
        })()
      }</h2>
    </div>
    <style jsx>{`
      .stepper-wrapper {
        display: flex;
        .step {
          display: flex;
          align-items: center;
        }
      }
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
