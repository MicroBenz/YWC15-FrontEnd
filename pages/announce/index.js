import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import Header from '../../component/Announce/Header';
import MajorSection from '../../component/Announce/MajorSection';

/* eslint-disable */
injectGlobal`
  @font-face {
    font-family: 'supermarket';
    src: local('supermarket'),
      url('static/fonts/supermarket.ttf') format('ttf');
  }

  body {
    font-family: 'Supermarket';
    letter-spacing: .02em;
    -webkit-font-smoothing: antialiased;
    margin: 0 !important;
    padding: 0 !important;
    overflow-y: hidden !important;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: .024681em;
  }
`;
/* eslint-enable */

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
    </Container>
  </Foreground>
);

export default Announce;
