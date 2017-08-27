import React from 'react';
import styled from 'styled-components';

import content from './content.json';
import colors from '../../utils/colors';

const WhatIsYWCText = styled.h1`
  font-size: 30px;
`;

const ContentContainer = styled.div.attrs({
  className: 'container'
})`
  width: 75%;
  padding: 30px 0px;
  font-size: 18px;
  line-height: 29px;
  @media(max-width: 768px) {
    width: 100%;
    padding: 30px 5%;
  }
`;

const TitleBorder = styled.div`
  width: 500px;
  margin: 0 auto;
  border: 6px inset ${colors.cyan};
  border-left: 0px;
  border-right: 0px;
  @media(max-width: 768px) {
    width: 90%;
  }
`;

const TextContainer = styled.div`
  border: 4px solid ${colors.cyan};
  border-top: none;
  border-bottom: none;
  margin: 15px 0px;
`;

const WhatIsYWC = () => (
  <div>
    <TitleBorder>
      <TextContainer>
        <WhatIsYWCText>What is ywc</WhatIsYWCText>
      </TextContainer>
    </TitleBorder>
    <ContentContainer>
      <h2>{content.whatIsYwc}</h2>
    </ContentContainer>
  </div>
);

export default WhatIsYWC;
