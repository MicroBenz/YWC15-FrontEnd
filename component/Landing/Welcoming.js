import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Typist from 'react-typist';
import { Link, Events, scrollSpy, scroller } from 'react-scroll';

import content from './content.json';
import colors from '../../utils/colors';

const Flash = keyframes`
  0%,50%,to {
    opacity: 1
  }

  25%,75% {
    opacity: 0
  }
`;

const Square = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${colors.cyan};
  ${props => props.extraMargin && 'margin-right: 5px;'}
  @media(max-width: 768px) {
    width: 7px;
    height: 7px;
  }
`;

const Container = styled.div`
  position: relative;
`;

const CampBranding = styled.div`
  width: 600px;
  margin: 0 auto;
  position: relative;

  ${props => (props.x !== null && props.y !== null) && css`
    transform: translate3d(${props.x}px, ${props.y}px, 0);
  `}

  @media(max-width: 768px) {
    width: 310px;
  }
`;

const CentralHexagon = styled.img.attrs({
  src: '/static/img/landing/welcoming/central_hex.png'
})`
  width: 100%;
`;

const CampDetailContainer = styled.div`
  position: absolute;
  left: 18%;
  top: 27%;
  width: 64%;
  @media(max-width: 768px) {
    top: 23%;
  }
`;

const CampLogo = styled.img.attrs({
  src: '/static/img/logo.png',
  alt: 'Young Webmaster Camp 15 Logo'
})`
  width: 80%;
  @media(max-width: 768px) {
    width: 77%;
  }
`;

const SloganContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  @media(max-width: 768px) {
    width: 90%;
  }
`;

const SquareRow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 7px;
  @media(max-width: 768px) {
    padding-bottom: 5px;
  }
`;

const SloganWrapper = styled.div`
  position: relative;
  &:before {
    display: block;
    content: "";
    width: 51%;
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
`;

const SloganInnerWrapper = styled.div`
  padding: 5px 0px;
  border: 1px solid ${colors.darkCyan};
  @media(max-width: 768px) {
    padding-top: 7px;
  }
  &:before {
    display: block;
    content: "";
    width: 51%;
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
`;

const SloganText = styled.h1`
  font-size: 26px;
  letter-spacing: 1.8px;
  padding-top: 6px;

  @media(max-width: 768px) {
    font-size: 15px;
    padding-top: 0px;
    letter-spacing: 1.5px;
  }

  .Cursor {
    animation: ${Flash} .5s infinite;
  }
`;

const CampDate = styled.h2`
  font-size: 42px;
  margin: 0;
  line-height: 1em;
  padding-top: 14px;
  @media(max-width: 768px) {
    font-size: 20px;
    padding-top: 10px;
  }
`;

const CampLocation = styled.h2`
  font-size: 18px;
  margin: 0;
  @media(max-width: 768px) {
    font-size: 11px;
  }
`;

const ScrollingBar = styled.img.attrs({
  src: '/static/img/landing/materials/scroll.png'
})`
  position: absolute;
  bottom: -100px;
  right: 0;
  z-index: 15;

  @media(max-width: 768px) {
    width: 15%;
  }
`;

const SponsorContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  @media(max-width: 860px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const SponsorWrapper = styled.div`
  position: relative;
  margin: 25px;

  display: flex;
  order: ${props => props.desktopOrder};
  @media(max-width: 860px) {
    order: ${props => props.mobileOrder};
  }

  @media(max-width: 768px) {
    margin: 10px;
  }

  img.circle {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
    height: 220px;
    width: 220px;
    max-width: none;
    margin: -28px;

    @media(max-width: 768px) {
      height: 178px;
      width: 178px;
      margin: -24px;
    }
  }
`;

const SponsorLogo = styled.img`
  display: flex;
  height: 125px;
  margin: 20px;
  max-width: none;

  @media(max-width: 768px) {
    height: 100px;
    margin: 15px;
  }
`;

class Welcoming extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      z: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleScroll);
  }


  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleScroll);
  }

  handleScroll(e) {
    // this.setState({
    //   x: -(e.clientX * 0.02),
    //   y: -(e.clientY * 0.02)
    // });
  }

  render() {
    return (
      <Container>
        <CampBranding x={this.state.x} y={this.state.y} z={this.state.z}>
          <CentralHexagon />
          <CampDetailContainer>
            <CampLogo />
            <SloganContainer className="slogan-container">
              <SquareRow>
                <Square extraMargin />
                <Square extraMargin />
                <Square />
              </SquareRow>
              <SloganWrapper className="slogan-outer-container">
                <SloganInnerWrapper className="slogan-inner-container">
                  <SloganText>
                    <Typist cursor={{ element: '_' }}>DIGITAL INNOVATION</Typist>
                  </SloganText>
                </SloganInnerWrapper>
              </SloganWrapper>
              <div>
                <CampDate className="camp-date">
                  <Typist
                    cursor={{
                      show: false
                    }}
                  >4-7 JANUARY 2018</Typist>
                </CampDate>
                <CampLocation className="camp-location">
                  <Typist
                    cursor={{
                      show: false
                    }}
                  >
                    @ สถาบันการจัดการปัญญาภิวัฒน์
                  </Typist>
                </CampLocation>
              </div>
            </SloganContainer>
          </CampDetailContainer>
        </CampBranding>
        <ScrollingBar />

        <SponsorContainer className="columns">
          {
            content.sponsors.map(s => (
              <SponsorWrapper key={s.name} desktopOrder={s.dOrder} mobileOrder={s.mOrder} >
                <img className="circle circle-1" src="/static/img/landing/materials/free1.png" alt="" />
                <img className="circle circle-2" src="/static/img/landing/materials/free2.png" alt="" />
                <img className="circle circle-3" src="/static/img/landing/materials/free3.png" alt="" />
                <SponsorLogo src={`/static/img/landing/sponsor/${s.name}.png`} alt="" />
              </SponsorWrapper>
            ))
          }
        </SponsorContainer>
      </Container>
    );
  }
}

export default Welcoming;
