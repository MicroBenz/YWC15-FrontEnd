import React from 'react';
import styled from 'styled-components';

import SectionHeader from './SectionHeader';
import TimelineItem from './TimelineItem';
import colors from '../../utils/colors';

const Container = styled.div.attrs({
  className: 'container'
})`
  @media(max-width: 768px) {
    padding: 0 5%;
  }
`;

const Timeline = () => (
  <div>
    <SectionHeader title="Timeline" subtitle="ตารางเวลา" />
    <Container>
      <div className="columns">
        <div className="column">
          <TimelineItem item={1} onTime />
        </div>
        <div className="column">
          <TimelineItem item={2} onTime={false} />
        </div>
        <div className="column">
          <TimelineItem item={3} onTime={false} />
        </div>
        <div className="column">
          <TimelineItem item={4} onTime={false} />
        </div>
        <div className="column">
          <TimelineItem item={5} onTime={false} />
        </div>
      </div>
    </Container>
  </div>
);

export default Timeline;
