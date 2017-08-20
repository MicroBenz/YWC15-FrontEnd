import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  background-image: url('../../static/img/landing/hero-wrapper.png');
  height: 40em;
  width: 40em;
  background-size: cover;
`;

const HeroSection = () => (
  <div>
    <HeroWrapper>
      <img src={'../../static/img/landing/logo.png'} />
      <h1></h1>
    </HeroWrapper>
  </div>
);

export default HeroSection;

