import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';
import FrameBox from '../Core/FrameBox';

const GuruContainer = styled(FrameBox)`
  position: relative;
  cursor: pointer;
`;

const GuruImage = styled.img`
  display: block;
  transition: all .2s;
  
  &.active {
    box-shadow: 0 0 15px ${colors.cyan};
  }
`;

const GuruItem = props => (
  <GuruContainer onClick={props.onClick}>
    <GuruImage className={props.active ? 'active' : ''} src={props.image} alt={props.name} />
  </GuruContainer>
);

export default GuruItem;
