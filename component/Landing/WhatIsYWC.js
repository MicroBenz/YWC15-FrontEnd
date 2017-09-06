import React from 'react';
import styled from 'styled-components';

import Parallax from '../Landing/ParallaxScroll';
import FrameBox from '../Core/FrameBox';
import content from './content.json';
import colors from '../../utils/colors';

const Container = styled.div`
  width: 80%;
  margin: 80px auto;
  @media(max-width: 768px) {
    width: 90%;
    margin: 10px auto;
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

const Header = styled.div`
  width: 550px;
  margin: 0 auto;
  text-shadow: 0 0 10px #2eb5db, 0 0 2px #2eb5db, 0 0 2px #2eb5db, 0 0 2px #2eb5db, 0 0 20px #2eb5db;
  @media(max-width: 768px) {
    width: 100%;
  }
`;

const HeaderBox = styled(FrameBox)`
  width: 100% !important;
`;

const WhatIsYWCText = styled.h1`
  font-size: 53px;
  padding-top: 10px;
  @media(max-width: 768px) {
    font-size: 37px;
  }
`;

const ContentContainer = styled.div.attrs({
  className: 'container'
})`
  width: 100%;
  padding: 30px 10%;
  font-size: 24px;
  font-family: 'cordia new';
  line-height: 29px;
  @media(max-width: 768px) {
    padding: 30px 0;
  }
  h2 {
  }
`;

const WhatIsYWC = () => (
  <Container>
    <Parallax speed={0.15}>
      <img src="/static/img/landing/materials/bg_whatis.png" alt="" />
    </Parallax>
    <Header>
      <SquareRow>
        <Square extraMargin />
        <Square extraMargin />
        <Square />
      </SquareRow>
      <HeaderBox fullWidth>
        <WhatIsYWCText>What is YWC</WhatIsYWCText>
      </HeaderBox>
    </Header>
    <ContentContainer>
      <h2>{content.whatIsYwc}</h2>
    </ContentContainer>
  </Container>
);

export default WhatIsYWC;