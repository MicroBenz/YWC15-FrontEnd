import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Parallax from '../Landing/ParallaxScroll';

import SectionHeader from './SectionHeader';
import TimelineItem from './TimelineItem';

const Container = styled.div.attrs({
  className: 'container'
})`
  @media(max-width: 768px) {
    padding: 0 5%;
  }
`;

const forceTrue = moment().isAfter(moment('2018-01-08'));

const isBetween = (from, to) => (
  moment().isSameOrAfter(moment(from, 'YYYY-MM-DD'))
  && moment().isBefore(moment(to, 'YYYY-MM-DD'))
);

const Timeline = () => (
  <div>
    <Parallax speed={0.05}>
      <img src="/static/img/landing/materials/bg_whatis.png" alt="" style={{ transform: 'scaleX(-1)' }} />
    </Parallax>
    <SectionHeader title="Timeline" subtitle="ตารางเวลา" />
    <Container>
      <div className="columns">
        <div className="column">
          <TimelineItem item={1} onTime={forceTrue || isBetween('2017-09-07', '2017-11-05')} title="รับสมัคร" date="7 กันยายน - 5 พฤศจิกายน" />
        </div>
        <div className="column">
          <TimelineItem
            item={2}
            onTime={forceTrue || isBetween('2017-11-11', '2017-11-19')}
            title="ประกาศผล"
            date="11 พฤศจิกายน"
          />
        </div>
        <div className="column">
          <TimelineItem
            item={3}
            onTime={forceTrue || moment().isSame(moment('2017-11-26'))}
            title="สัมภาษณ์"
            date="26 พฤศจิกายน"
          />
        </div>
        <div className="column">
          <TimelineItem
            item={4}
            onTime={forceTrue || moment().isSame(moment('2017-12-3'))}
            title="ประกาศผลสัมภาษณ์"
            date="3 ธันวาคม"
          />
        </div>
        <div className="column">
          <TimelineItem
            item={5}
            onTime={forceTrue || isBetween('2017-12-15', '2018-01-08')}
            title="วันค่าย"
            date="4 - 7 มกราคม"
          />
        </div>
      </div>
    </Container>
  </div>
);

export default Timeline;
