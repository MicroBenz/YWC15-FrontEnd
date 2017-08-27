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
  margin: 10px 0 5px;
  font-size: 22px;
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
  font-size: 14px;
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
    <Title active={props.onTime}>{'รับสมัคร'}</Title>
    <TimelineDate>{'วันนี้ - พรุ่งนี้'}</TimelineDate>
    <style jsx>{`
      .registrant-count {
        font-size: 20px;
        font-family: 'Supermarket';
        color: ${colors.lightCyan};
        line-height: 35px;
        padding-top: 25px;
        span {
          font-size: 60px;
          font-weight: 600;
        }
      }
      .detail {
        padding-bottom: 20px;
      }
    `}</style>
  </Container>
);

export default TimelineItem;
