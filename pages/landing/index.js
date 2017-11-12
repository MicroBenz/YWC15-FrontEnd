import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Element } from 'react-scroll';
import io from 'socket.io-client';

import connect from '../../store/connect';
import { actions as appActions } from '../../store/reducers/app';

import Welcoming from '../../component/Landing/Welcoming';
import WhatIsYWC from '../../component/Landing/WhatIsYWC';
import Guru from '../../component/Landing/Guru';
import Register from '../../component/Landing/Register';
import Timeline from '../../component/Landing/Timeline';
import Map from '../../component/Landing/Map';
import Gallery from '../../component/Landing/Gallery';
import FAQ from '../../component/Landing/FAQ';
import ContactUs from '../../component/Landing/ContactUs';
import FreeAll from '../../component/Landing/FreeAll';
import Sponsor from '../../component/Landing/Sponsor';
import Pr from '../../component/Landing/Pr';
import Footer from '../../component/Landing/Footer';
import Navbar from '../../component/Landing/Navbar';
import MajorModal from '../../component/Landing/MajorModal';
import Social from '../../component/Landing/Social';

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

const Section = styled(Element)`
  padding: 80px 0px;
  text-align: center;
  position: relative;

  @media(max-width: 768px) {
    padding: 50px 0;
  }
`;

const WelcomingSection = Section.extend`
  min-height: 100vh;
  padding: 20px 0 0;
  @media(max-width: 768px) {
    padding: 50px 0 0;
    min-height: 100%;
  }
`;

const WhatISYWCSection = Section.extend`
  padding-bottom: 0;
`;

const GuruSection = Section.extend`
  padding-bottom: 0;
  @media(max-width: 768px) {
    padding-top: 0;
  }
`;

const MapSection = Section.extend`
  padding-bottom: 0;
`;

const ContactSection = Section.extend`
  padding-bottom: 0;
`;

const Foreground = styled.div`
  background-image: url('/static/img/bg-front.png');
  background-size: 100% auto;
  overflow: hidden;
`;

const BlackBow = styled.img`
  position: fixed;
  top: 0;
  right: 0;
  transform: scaleX(-1);
  height: 220px;
`;

@connect(
  state => ({
    isShowSeeMore: state.app.isShowSeeMore,
    seeMoreMajor: state.app.seeMoreMajor
  }),
  { ...appActions }
)
export default class LandingPage extends Component {
  componentDidMount() {
    this.props.loadRegisterStat();
    const socket = io('https://staging.ywc15.ywc.in.th');
    socket.on('connect', () => console.log('connect la'));
    socket.on('queue', (data) => console.log(data));
  }

  render() {
    return (
      <Foreground>
        {/* <BlackBow src="/static/img/bow-black.png" /> */}
        <Navbar />
        <WelcomingSection name="welcoming-section">
          <FreeAll />
          <Welcoming />
        </WelcomingSection>
        <WhatISYWCSection name="what-is-ywc" className="what-is-ywc">
          <WhatIsYWC />
        </WhatISYWCSection>
        <Section name="register" className="register">
          <Register />
        </Section>
        <Section name="timeline" className="timeline">
          <Timeline />
        </Section>
        <MapSection name="map" className="map">
          <Map />
        </MapSection>
        <GuruSection name="guru" className="guru">
          <Guru />
        </GuruSection>
        <Section name="gallery" className="gallery">
          <Gallery />
        </Section>
        <Section name="sponsor" className="sponsor">
          <Sponsor />
        </Section>
        <Section name="faq" className="faq">
          <FAQ />
        </Section>
        { false && <Section name="pr" className="pr">
          <Pr />
        </Section>}
        <ContactSection name="contactus" className="contactus">
          <ContactUs />
        </ContactSection>
        <Section name="social">
          <Social />
        </Section>
        <Section name="footer-section">
          <Footer />
        </Section>
        {this.props.isShowSeeMore && (<MajorModal major={this.props.seeMoreMajor} />)}
      </Foreground>
    );
  }
}
