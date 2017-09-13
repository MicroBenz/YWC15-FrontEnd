import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import colors from '../../utils/colors'
import SectionHeader from '../../component/Landing/SectionHeader';

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
  text-align: center;
}

h1, h2, h3, h4, h5, h6 {
  letter-spacing: .024681em;
}
`;
/* eslint-enable */

const Foreground = styled.div`
  background-image: url('/static/img/bg-front.png');
  background-size: 100% auto;
  padding: 40px;
`;

const Banner = styled.img`
  margin: 15px 0;
  box-shadow: 0 0 12px ${colors.cyan};
`;

export default class MediaPage extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <Foreground>
        <SectionHeader title="public relations" subtitle="ร่วมประชาสัมพันธ์กับเรา" />
        <div className="container">
          <div className="columns">
            <div className="column">
              <Banner src="/static/img/banner/120x600.png" alt="" />
            </div>
            <div className="column">
              <div className="columns">
                <Banner src="/static/img/banner/ban300-250.gif" alt="" />
              </div>
              <div className="columns">
                <Banner src="/static/img/banner/ban250-250.jpg" alt="" />
              </div>
              <div className="columns">
                <Banner src="/static/img/banner/ban200-200.jpg" alt="" />
              </div>
            </div>
            <div className="column">
              <div className="columns">
                <Banner src="/static/img/banner/ban468-60.jpg" alt="" />
              </div>
              <div className="columns">
                <Banner src="/static/img/banner/ban560-329.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Banner src="/static/img/banner/ban728-90v56.gif" alt="" />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Banner src="/static/img/banner/ban960-320v2.jpg" alt="" />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Banner src="/static/img/banner/ban970-250v5.jpg" alt="" />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Banner src="/static/img/banner/ban970-500v2.jpg" alt="" />
            </div>
          </div>
        </div>
      </Foreground>
    )
  }
}

