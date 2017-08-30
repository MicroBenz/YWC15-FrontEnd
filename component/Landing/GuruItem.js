import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import colors from '../../utils/colors';

const GuruContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const ActiveOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const GuruImage = styled.img`
  display: block;
  ${props => props.active && `box-shadow: 0 0 15px ${colors.cyan};`}
`;

const GuruItem = props => (
  <GuruContainer onClick={props.onClick}>
    <GuruImage active={props.active} src={props.image} alt={props.name} />
  </GuruContainer>
);

export default GuruItem;
