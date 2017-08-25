import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';

const Parallelogram = styled.div`
  display: inline-block;
  width: 13px;
  height: 16px;
  margin-right: 3px;
  -webkit-transform: skew(-20deg);
  background-color: ${colors.lightCyan};
  ${props => props.active && `background-color: ${colors.cyan};`}
  @media(max-width: 768px) {
    width: 8px;
    height: 10px;
  }
`;

const ParallelogramContainer = styled.div`
  display: flex;
`;

const ShortContainer = ParallelogramContainer.extend`
  ${Parallelogram}:nth-child(n + 3) {
    @media(max-width: 768px) {
      display: none;
    }
  }
`;

const LongContainer = ParallelogramContainer.extend`
${Parallelogram}:nth-child(n + 5) {
  @media(max-width: 768px) {
    display: none;
  }
}
`;

const ShortParallelogram = ({ active }) => (
  <ShortContainer>
    <Parallelogram active={active} />
    <Parallelogram active={active} />
    <Parallelogram active={active} />
  </ShortContainer>
);

const LongParallelogram = ({ active }) => (
  <LongContainer>
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
  </LongContainer>
);

const Circle = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 1px solid ${colors.cyan};
  background-color: transparent;
  border-radius: 50%;
  position: relative;
  margin-left: 6px;
  margin-right: 6px;
  @media(max-width: 768px) {
    width: 20px;
    height: 20px;
    margin-left: 4px;
    margin-right: 4px;
  }
`;

const InnerCircle = styled.div`
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
  @media(max-width: 768px) {
    width: 8px;
    height: 8px;
  }
`;

const CircleStepper = ({ active = false }) => (
  <Circle>
    {active && <InnerCircle />}
  </Circle>
);

const StepWrapper = styled.div`
  display: flex;
  @media(max-width: 768px) {
    justify-content: center;
  }
`;

const Step = styled.div`
  display: flex;
  align-items: center;
`;

const StepperTextWrapper = styled.div`
  padding: 15px 0;
  @media(max-width: 768px) {
    text-align: center;
    padding-bottom: 5px;
  }
  > h1 {
    font-family: 'Agency FB';
    font-weight: 600;
    font-size: 48px;
    line-height: 46px;
    color: ${colors.cyan};
    letter-spacing: 3px;
  }
  > h2 {
    font-family: 'Cordia New';
    font-size: 24px;
    font-weight: 600;
  }
`;

const Stepper = ({ step, major }) => (
  <div>
    <StepWrapper>
      <Step>
        <ShortParallelogram active={step >= 1} />
        <CircleStepper active={step >= 1} />
      </Step>
      <Step>
        <LongParallelogram active={step >= 2} />
        <CircleStepper active={step >= 2} />
      </Step>
      <Step>
        <LongParallelogram active={step >= 3} />
        <CircleStepper active={step >= 3} />
      </Step>
      <Step>
        <LongParallelogram active={step >= 4} />
        <CircleStepper active={step >= 4} />
      </Step>
      <Step>
        <LongParallelogram active={step >= 5} />
        <CircleStepper active={step >= 5} />
      </Step>
    </StepWrapper>
    <StepperTextWrapper>
      <h1 className="step-title">STEP {step}</h1>
      <h2 className="step-label">{
        (() => {
          switch (step) {
            case 1:
              return 'ข้อมูลส่วนตัว';
            case 2:
              return 'ข้อมูลการติดต่อ';
            case 3:
              return 'ความสามารถพิเศษ';
            case 4:
              return 'คำถามส่วนกลาง';
            case 5: {
              return `คำถามเฉพาะสาขา Web ${major.charAt(0).toUpperCase()}${major.slice(1)}`;
            }
            default:
              return '';
          }
        })()
      }</h2>
    </StepperTextWrapper>
  </div>
);

export default Stepper;
