import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';

const Parallelogram = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  -webkit-transform: skew(-20deg);
  background-color: #49a29e;
  @media(max-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

const Circle = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: ${colors.cyan};
  border-radius: 50%;
  @media(max-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

const SemicolonContainer = styled.div`
  display: inline-block;
`;

const Square = styled.div`
  width: 4px;
  height: 4px;
  background-color: ${colors.cyan};
  ${props => props.middle && 'margin: 2px 0px;'}
  @media(max-width: 768px) {
    width: 3px;
    height: 3px;
    ${props => props.middle && 'margin: 1px 0px;'}  
  }
`;

const Semicolon = ({ style }) => (
  <SemicolonContainer style={style}>
    <Square />
    <Square middle />
    <Square />
  </SemicolonContainer>
);

const BorderedSqaure = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: ${colors.cyan};
  border: 3.5px solid #49a29e;
  @media(max-width: 768px) {
    width: 12px;
    height: 12px;
    border: 2.5px solid #49a29e;  
  }
`;

const HeaderArtworkContainer = styled.div`
  display: flex;
  > div {
    display: flex;
    height: 100%;
  }
`;

const Right = styled.div`
  flex: 1;
  justify-content: flex-end;
`;

const HeaderArtwork = () => (
  <HeaderArtworkContainer>
    <div>
      <Circle style={{ marginRight: '6px' }} />
      <Semicolon style={{ marginRight: '8px' }} />
      <Parallelogram style={{ marginRight: '5px' }} />
      <Parallelogram style={{ marginRight: '5px' }} />
      <Parallelogram style={{ marginRight: '5px' }} />
      <Parallelogram />
    </div>
    <Right>
      <BorderedSqaure />
    </Right>
  </HeaderArtworkContainer>
);

export default HeaderArtwork;
