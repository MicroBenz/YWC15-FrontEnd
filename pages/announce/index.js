import React from 'react';
import styled from 'styled-components';

import Header from '../../component/Announce/Header';
import MajorSection from '../../component/Announce/MajorSection';
import Announcer from '../../component/Announce/Announcer';

const Container = styled.div.attrs({
  className: 'container'
})`
  padding-bottom: 80px;
  @media(max-width: 768px) {
    padding: 0 5%;
  }
`;

const Foreground = styled.div`
  background-image: url('/static/img/bg-front.png');
  background-size: 100% auto;
  overflow: hidden;
`;

const Announce = () => (
  <Foreground>
    <Container>
      <Header />
      <MajorSection />
      <Announcer />
    </Container>
  </Foreground>
);

export default Announce;
