import React from 'react';
import styled, { keyframes } from 'styled-components';

const cubeGridAnimation = keyframes`
  0%, 70%, 100% {
    transform: scale3D(1, 1, 1);
  } 35% {
    transform: scale3D(0, 0, 1);
  } 
`;

const CubeGridContainer = styled.div`
  display: inline-block;
  transform: rotate(45deg);
  width: ${props => props.size || 40}px;
  height: ${props => props.size || 40}px;
`;

const Cube = styled.div`
  width: 33%;
  height: 33%;
  float: left;
  background-color: ${props => props.color || '#ffffff'};
  animation: ${cubeGridAnimation} 1.3s infinite ease-in-out;
  ${(props) => {
    const { index } = props;
    let animationDelay;
    switch (index) {
      case 1:
        animationDelay = 0.2;
        break;
      case 2:
        animationDelay = 0.3;
        break;
      case 3:
        animationDelay = 0.4;
        break;
      case 4:
        animationDelay = 0.1;
        break;
      case 5:
        animationDelay = 0.2;
        break;
      case 6:
        animationDelay = 0.3;
        break;
      case 7:
        animationDelay = 0;
        break;
      case 8:
        animationDelay = 0.1;
        break;
      case 9:
        animationDelay = 0.2;
        break;
      default:
        animationDelay = 0;
    }
    return `animation-delay: ${animationDelay}s;`;
  }}
`; //eslint-disable-line

const Loader = ({ size = 40, color = '#ffffff' }) => (
  <CubeGridContainer size={size}>
    <Cube color={color} index={1} />
    <Cube color={color} index={2} />
    <Cube color={color} index={3} />
    <Cube color={color} index={4} />
    <Cube color={color} index={5} />
    <Cube color={color} index={6} />
    <Cube color={color} index={7} />
    <Cube color={color} index={8} />
    <Cube color={color} index={9} />
  </CubeGridContainer>
);

export default Loader;
