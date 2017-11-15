import React from 'react';
import styled from 'styled-components';

import Header from '../../component/Announce/Header';
import Major from '../../component/Announce/Major';

const Container = styled.div.attrs({
  className: 'container'
})`
  width: 100%;
  padding: 30px 10%;
  font-size: 24px;
  font-family: 'cordia new';
  line-height: 29px;
  @media(max-width: 768px) {
    padding: 30px 0;
  }
  h2 {
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
      <Major />
    </Container>
  </Foreground>
);

export default Announce;
