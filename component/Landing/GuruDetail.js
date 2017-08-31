import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import colors from '../../utils/colors';
import FrameBox from '../Core/FrameBox';

const FrameBoxWrapper = styled.div`
  width: 70%;
  border: 1px solid ${colors.cyan};
  position: relative;
  ${props => props.center && 'margin: 0 auto;'}
  @media(max-width: 768px) {
    width: 90%;
  }
  &:before {
    display: block;
    content: "";
    width: 30px;
    height: 30px;
    top: -6px;
    left: -6px;
    position: absolute;
    border-top: 10px solid ${colors.cyan};
    border-left: 10px solid ${colors.cyan};
    ${props => props.fullWidth && `
      width: 51%;
    `};
    @media(max-width: 768px) {
      width: 15px;
      height: 15px;
      top: -3px;
      left: -3px;
      border-top: 5px solid ${colors.cyan};
      border-left: 5px solid ${colors.cyan};
    }
  }
  &:after {
    display: block;
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    top: -6px;
    right: -6px;
    border-top: 10px solid ${colors.cyan};
    border-right: 10px solid ${colors.cyan};
    ${props => props.fullWidth && `
      width: 51%;
    `};
    @media(max-width: 768px) {
      width: 15px;
      height: 15px;
      top: -3px;
      right: -3px;
      border-top: 5px solid ${colors.cyan};
      border-right: 5px solid ${colors.cyan};
    }
  }
`;

const FrameBoxInnerWrapper = styled.div`
  &:before {
    display: block;
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: -6px;
    left: -6px;
    border-bottom: 10px solid ${colors.cyan};
    border-left: 10px solid ${colors.cyan};
    ${props => props.fullWidth && `
      width: 51%;
    `};
    @media(max-width: 768px) {
      width: 15px;
      height: 15px;
      bottom: -3px;
      left: -3px;
      border-bottom: 5px solid ${colors.cyan};
      border-left: 5px solid ${colors.cyan};
    }
  }
  &:after {
    display: block;
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: -6px;
    right: -6px;
    border-bottom: 10px solid ${colors.cyan};
    border-right: 10px solid ${colors.cyan};
    ${props => props.fullWidth && `
      width: 51%;
    `};
    @media(max-width: 768px) {
      width: 15px;
      height: 15px;
      bottom: -3px;
      right: -3px;
      border-bottom: 5px solid ${colors.cyan};
      border-right: 5px solid ${colors.cyan};
    }
  }
`;

const GuruContainer = styled.div`
  display: flex;
  background-color: ${rgba(colors.darkCyan2, 0.4)};
`;

const ImageContainer = styled.div`
  flex: 1;
  @media(max-width: 768px) {
    display: none;
  }
`;

const DescriptionContainer = styled.div`
  flex: 3;
  align-self: center;
  @media(max-width: 768px) {
    padding: 10px 0;
  }
`;

const GuruImage = styled.img.attrs({
  src: props => props.image,
  alt: props => props.name
})`
  display: block;
`;

const Header = styled.div`
  width: 80%;
  margin: 0 auto;
  @media(max-width: 768px) {
    width: 90%;
  }
`;

const HeaderBox = styled(FrameBox)`
  width: 100% !important;
  margin: 0 auto;
`;

const SquareRow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 7px;
  @media(max-width: 768px) {
    padding-bottom: 5px;
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

const GuruName = styled.h2`
  font-size: 27px;
  font-weight: 600;
  padding-top: 12px;
  padding-bottom: 6px;
  @media(max-width: 768px) {
    font-size: 23px;
  }
`;

const GuruJobPosition = styled.h3`
  font-size: 24px;
  padding-top: 10px;
  @media(max-width: 768px) {
    font-size: 20px;
    padding-top: 14px;
  }
`;

const GuruDetail = props => (
  <FrameBoxWrapper center>
    <FrameBoxInnerWrapper fullWidth={props.fullWidth}>
      <GuruContainer>
        <ImageContainer>
          <GuruImage image={props.image} alt={props.name} />
        </ImageContainer>
        <DescriptionContainer>
          <Header>
            <SquareRow>
              <Square extraMargin />
              <Square extraMargin />
              <Square />
            </SquareRow>
            <HeaderBox fullWidth>
              <GuruName>{props.name} ({props.nickname})</GuruName>
            </HeaderBox>
          </Header>
          <GuruJobPosition>{props.jobPosition}</GuruJobPosition>
        </DescriptionContainer>
      </GuruContainer>
    </FrameBoxInnerWrapper>
  </FrameBoxWrapper>
);

export default GuruDetail;
