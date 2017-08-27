import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import SectionHeader from './SectionHeader';
import TimelineItem from './TimelineItem';

const Container = styled.div.attrs({
  className: 'container'
})`
  @media(max-width: 768px) {
    padding: 0 5%;
  }
`;

const forceTrue = moment().isAfter(moment('8/1/2018'));

const Timeline = () => (
  <div>
    <SectionHeader title="Timeline" subtitle="ตารางเวลา" />
    <Container>
      <div className="columns">
        <div className="column">
          <TimelineItem item={1} onTime={forceTrue || moment().isBefore(moment('11/5/2017'))} title="รับสมัคร" date="วันนี้ - 5 พฤศจิกายน" />
        </div>
        <div className="column">
          <TimelineItem
            item={2}
            onTime={forceTrue || (moment().isSameOrAfter(moment('11/11/2017')) && moment().isBefore('11/19/2017'))}
            title="ประกาศผล"
            date="11 พฤศจิกายน"
          />
        </div>
        <div className="column">
          <TimelineItem
            item={3}
            onTime={forceTrue || moment().isSame(moment('11/19/2017'))}
            title="สัมภาษณ์"
            date="19 พฤศจิกายน"
          />
        </div>
        <div className="column">
          <TimelineItem
            item={4}
            onTime={forceTrue || moment().isSame(moment('11/26/2017'))}
            title="ประกาศผลสัมภาษณ์"
            date="26 พฤศจิกายน"
          />
        </div>
        <div className="column">
          <TimelineItem
            item={5}
            onTime={forceTrue || (moment().isSameOrAfter(moment('15/12/2017')) && moment().isBefore('1/8/2018'))}
            title="วันค่าย"
            date="4 - 7 มกราคม"
          />
        </div>
      </div>
    </Container>
  </div>
);

export default Timeline;
