import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import FinalistHeader from '../../component/Finalist/FinalistHeader';
import MajorBox from '../../component/Finalist/MajorBox';
import MajorList from '../../component/Finalist/MajorList';
import SlipUploader from '../../component/Finalist/SlipUploader';

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
  padding: 40px 0;
  @media(max-width: 768px) {
    padding: 10% 5%;
  }
`;

const Foreground = styled.div`
  background-image: url('/static/img/bg-front.png');
  background-size: 100% auto;
  overflow: hidden;
`;

const FinalistPage = () => (
  <Foreground>
    <Container>
      <FinalistHeader />
      <div className="columns">
        <div className="column">
          <MajorBox name="content" />
          <MajorList major="content" />
        </div>
        <div className="column">
          <MajorBox name="design" />
          <MajorList major="design" />
        </div>
        <div className="column">
          <MajorBox name="marketing" />
          <MajorList major="marketing" />
        </div>
        <div className="column">
          <MajorBox name="programming" />
          <MajorList major="programming" />
        </div>
      </div>
      <SlipUploader />
    </Container>
  </Foreground>
);

export default FinalistPage;
