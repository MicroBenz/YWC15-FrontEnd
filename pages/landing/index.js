import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Element } from 'react-scroll';

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
  }
`;
/* eslint-enable */

const Section = styled(Element)`
  padding: 80px 0px;
  text-align: center;
  position: relative;

  @media(max-width: 768px) {
    padding: 40px 0;
  }
`;

const WelcomingSection = Section.extend`
  min-height: 100vh;
  padding: 80px 0 0;
  @media(max-width: 768px) {
    padding: 50px 0 0;
    min-height: 100%;
  }
`;

@connect(
  () => ({}),
  { ...appActions }
)
export default class LandingPage extends Component {

  componentDidMount() {
    this.props.loadRegisterStat();
  }

  render() {
    return (
      <div>
        <Navbar />
        <WelcomingSection name="welcoming-section">
          <FreeAll />
          <Welcoming />
        </WelcomingSection>
        <Section name="what-is-ywc" className="what-is-ywc">
          <WhatIsYWC />
        </Section>
        <Section name="guru" className="guru">
          <Guru />
        </Section>
        <Section name="register" className="register">
          <Register />
        </Section>
        <Section name="timeline" className="timeline">
          <Timeline />
        </Section>
        <Section name="map" className="map">
          <Map />
        </Section>
        <Section name="gallery" className="gallery">
          <Gallery />
        </Section>
        <Section name="faq" className="faq">
          <FAQ />
        </Section>
        <Section name="sponsor" className="sponsor">
          <Sponsor />
        </Section>
        <Section name="pr" className="pr">
          <Pr />
        </Section>
        <Section name="contactus" className="contactus">
          <ContactUs />
        </Section>
        <Section name="footer-section">
          <Footer />
        </Section>
      </div>
    );
  }
}

