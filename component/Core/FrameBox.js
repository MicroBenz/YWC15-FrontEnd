import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';

const FrameBoxWrapper = styled.div`
  border: 1px solid ${colors.cyan};
  position: relative;
  width: fit-content;
  ${props => props.center && 'margin: 0 auto;'}
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

const FrameBoxInnerWrapper = styled.div`
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

const FrameBox = props => (
  <FrameBoxWrapper {...props}>
    <FrameBoxInnerWrapper >
      {props.children}
    </FrameBoxInnerWrapper>
  </FrameBoxWrapper>
);

export default FrameBox;
