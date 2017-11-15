import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';
import GlowingText from '../Core/GlowingText';
import HeaderArtwork from '../Landing/HeaderArtwork';

const Container = styled.div`
  border: 1px solid ${colors.cyan};
  padding: 18px 15px;
  position: relative;
  text-align: center;
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
`;

const InnerContainer = styled.div`
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
`;

const MajorName = GlowingText.extend`
  font-size: 21px;
  @media(max-width: 768px) {
    font-size: 35px;
  }
`;

const MajorImg = styled.img`
  height: 110px;
`;

const Major = () => (
  <Container>
    <InnerContainer>
      <HeaderArtwork />
      <MajorImg src={'/static/img/roles/programming.png'} />
      <MajorName>{'Programming'}</MajorName>
    </InnerContainer>
  </Container>
);

export default Major
;
