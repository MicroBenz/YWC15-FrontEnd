import React from 'react';
import styled from 'styled-components';

import FrameBox from '../Core/FrameBox';
import colors from '../../utils/colors';

const Container = styled.div`
  opacity: ${props => props.active ? '1' : '0.3'};
`;

const TimelineBox = styled(FrameBox)`
  width: 100% !important;
`;

const Title = styled.h3`
  color: ${colors.lightCyan};
  margin: 10px 0 0;
  font-size: 24px;
  font-weight: 600;
  ${props => props.active && `color: ${colors.cyan};`}
  @media(max-width: 768px) {
    font-size: 38px;
    font-weight: 600;
    line-height: 38px;
    margin-top: 19px;
    margin-bottom: 0;
  }
`;

const TimelineDate = styled.p`
  font-size: 17px;
  @media(max-width: 768px) {
    font-size: 23px;
  }
`;

const TimelineItem = props => (
  <Container active={props.onTime}>
    <TimelineBox center>
      <img
        src={`/static/img/landing/timeline/timeline-${props.item}${props.onTime ? '' : '-o'}.png`}
      />
    </TimelineBox>
    <Title active={props.onTime}>{props.title}</Title>
    <TimelineDate>{props.date}</TimelineDate>
  </Container>
);

export default TimelineItem;
