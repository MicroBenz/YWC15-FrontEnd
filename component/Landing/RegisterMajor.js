import React from 'react';
import styled from 'styled-components';

import HeaderArtwork from './HeaderArtwork';
import GlowingText from '../Core/GlowingText';
import LoginButton from '../Login/LoginButton';
import colors from '../../utils/colors';
import content from './content.json';

const MajorName = GlowingText.extend`
  font-size: 19px;
  @media(max-width: 768px) {
    font-size: 35px;
  }
`;

const RegistrantCount = styled.h2`
  font-size: 20px;
  font-family: 'Supermarket';
  color: ${colors.lightCyan};
  line-height: 35px;
  padding-top: 25px;
  span {
    font-size: 60px;
    font-weight: 600;
    @media(max-width: 768px) {
      font-size: 77px;
    }
  }
`;

const MajorDescription = styled.h3`
  @media(max-width: 768px) {
    font-size: 18px;
    margin: 12px 0;
  }
`;

const MajorSeeMore = styled.p`
  padding-bottom: 20px;
`;

const Container = styled.div`
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

const RegisterMajor = ({ major, count = 0 }) => (
  <Container>
    <InnerContainer>
      <HeaderArtwork />
      <img src={`/static/img/roles/${major}.png`} alt={major} />
      <MajorName>{content.major[major].title}</MajorName>
      <RegistrantCount><span>{count}</span> คน</RegistrantCount>
      <MajorDescription>{content.major[major].description}</MajorDescription>
      <MajorSeeMore className="detail">[ รายละเอียด ]</MajorSeeMore>
      <LoginButton major={major} />
    </InnerContainer>
  </Container>
);

export default RegisterMajor;
