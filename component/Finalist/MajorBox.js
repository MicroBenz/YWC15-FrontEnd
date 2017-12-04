import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import colors from '../../utils/colors';
import GlowingText from '../Core/GlowingText';
import HeaderArtwork from '../Landing/HeaderArtwork';

const Container = styled.div`
  border: 1px solid ${colors.cyan};
  padding: 18px 15px;
  position: relative;
  text-align: center;
  margin-bottom: 30px;
  transition: all .2s;
  opacity: .7;
  filter: grayscale(20%);
  background-color: ${rgba(colors.darkCyan2, 0.4)};
  box-shadow: 0.5px 0.5px 12px rgba(102, 252, 241, 0.63);
  opacity: 1;
  filter: none;

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
  font-size: 30px;
  @media(max-width: 768px) {
    font-size: 18px;
  }
`;

const MajorImg = styled.img`
  height: 150px;

  @media(max-width: 768px) {
    height: auto;
  }
`;

const Major = ({ name }) => (
  <Container>
    <InnerContainer>
      <HeaderArtwork />
      <MajorImg src={`/static/img/roles/${name}.png`} />
      <MajorName>{`web ${name}`}</MajorName>
    </InnerContainer>
  </Container>
);

export default Major
;
