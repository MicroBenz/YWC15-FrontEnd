import React from 'react';
import styled, { keyframes } from 'styled-components';

import colors from '../../utils/colors';

// const FreeImage = styled.img.attrs({
//   alt: 'ฟรีตลอดค่าย',
//   src: '/static/img/landing/welcoming/free.png'
// })`
//   width: 170px;
//   position: fixed;
//   top: 0px;
//   left: 20px;
//   z-index: 15;
//   @media(max-width: 768px) {
//     position: absolute;  
//     width: 95px;
//     top: 10px;
//     left: 10px;
//   }
// `;

const rolling = keyframes`
  0% { transform-origin: center; transform: rotate(-360deg); }
  to { transform-origin: center; transform: none; }
`;

const reverseRolling = keyframes`
  0% { transform-origin: center; transform: rotate(360deg); }
  to { transform-origin: center; transform: none; }
`;

const FreeContainer = styled.div`
  position: fixed;
  top: 0;
  left: 20px;
  display: block;
  height: 200px;
  width: 200px;
  text-shadow: 0px 0px 12px ${colors.cyan};
  z-index: 3;
  img {
    position: absolute;
    top: 0;
    left: 0;
  }

  h1 {
    font-size: 58px;
    padding-top: 61px;
    line-height: 1;
  }

  h2 {
    line-height: 1;
    font-size: 24px;
    margin-top: -12px;
  }

  .circle-1 { animation: ${rolling} 2s infinite linear; }
  .circle-3 { animation: ${reverseRolling} 2.5s infinite linear; }

  @media(max-width: 768px) {
    position: absolute;
    position: absolute;
    height: 120px;
    width: 120px;
    left: 5px;

    h1 {
      font-size: 36px;
      padding-top: 36px;
      line-height: 1;
    }
  
    h2 {
      line-height: 1;
      font-size: 16px;
      margin-top: -8px;
    }

  }
`;

const FreeAll = () => (
  <FreeContainer>
    <img className="circle-1" src="/static/img/landing/materials/free1.png" alt="" />
    <img className="circle-2" src="/static/img/landing/materials/free2.png" alt="" />
    <img className="circle-3" src="/static/img/landing/materials/free3.png" alt="" />
    <h1>ฟรี</h1>
    <h2>ตลอดค่าย</h2>
  </FreeContainer>
);

export default FreeAll;
