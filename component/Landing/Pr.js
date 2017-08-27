import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';
import GlowingButton from '../../component/Core/GlowingButton';

const Square = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${colors.cyan};
`;

const Container = styled.div`
  .square-container {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 7px;
  }

  .slogan-outer-container {
    position: relative;
    @media(max-width: 768px) {
      margin-top: 10px;
    }
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
      padding: 10px 20px;
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

      p {
        text-align: left;
      }
    }
  }
  
`;

const PrButton = styled.div`
  width: 50%;
  margin: 15px auto;
`;

const PrWarpper = styled.div`
  width: 40%;
  margin: 0 auto;
  position: relative;
  @media(max-width: 768px) {
    width: 90%;
  }
`;

const Header = styled.h1`
  font-size: 32px;
  display: inline-block;
  line-height: 1;
  padding: 2px 14px;
  border-bottom: 1px solid ${colors.cyan};
  @media(max-width: 768px) {
    width: 100%;
  }
`;

const Column = styled.div.attrs({
  className: 'column'
})`
  p {
    @media(max-width: 768px) {
      text-align: center !important;
      font-size: 24px;
    }
  }
`;

const Pr = () => (
  <PrWarpper className="container">
    <Header>เว็บไซต์ร่วมประชาสัมพันธ์</Header>
    <Container>
      <div className="square-container">
        <Square style={{ marginRight: '5px' }} />
        <Square style={{ marginRight: '5px' }} />
        <Square />
      </div>
      <div className="slogan-outer-container">
        <div className="slogan-inner-container">
          <div className="columns">
            <Column className="column">
              <p>JWC.in.th</p>
              <p>JWC.in.th</p>
              <p>JWC.in.th</p>
              <p>JWC.in.th</p>
              <p>JWC.in.th</p>
              <p>JWC.in.th</p>
              <p>JWC.in.th</p>
              <p>JWC.in.th</p>
            </Column>
            <Column className="column">
              <p>JWC.in.th</p>
              <p>JWC.in.th</p>
              <p>JWC.in.th</p>
              <p>JWC.in.th</p>
              <p>JWC.in.th</p>
              <p>JWC.in.th</p>
              <p>JWC.in.th</p>
              <p>JWC.in.th</p>
            </Column>
            <Column className="column">
              <p>JWC.in.th</p>
              <p>JWC.in.th</p>
              <p>JWC.in.th</p>
              <p>JWC.in.th</p>
              <p>JWC.in.th</p>
              <p>JWC.in.th</p>
            </Column>
          </div>
        </div>
      </div>
    </Container>

    <PrButton>
      <GlowingButton>ร่วมประชาสัมพันธ์กับเรา</GlowingButton>
    </PrButton>

  </PrWarpper>
);

export default Pr;
