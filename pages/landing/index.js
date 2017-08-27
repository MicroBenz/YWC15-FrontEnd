import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
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
import Footer from '../../component/Landing/Footer'

injectGlobal`
  
  @font-face {
    font-family: 'supermarket';
    src: local('supermarket'),
      url('static/fonts/supermarket.ttf') format('ttf');
  }

  body {
    font-family: 'supermarket';
    letter-spacing: .02em;
  }
  
`;

const Section = styled.div`
  padding: 50px 0px;
  text-align: center;
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
        <FreeAll />
        <Section id="welcoming-section">
          <Welcoming />
        </Section>
        <Section id="what-is-ywc-section">
          <WhatIsYWC />
        </Section>
        <Section id="guru-section">
          <Guru />
        </Section>
        <Section id="register-section">
          <Register />
        </Section>
        <Section id="timeline-section">
          <Timeline />
        </Section>
        <Section id="map-section">
          <Map />
        </Section>
        <Section id="gallery-section">
          <Gallery />
        </Section>
        <Section id="faq-section">
          <FAQ />
        </Section>
        <Section id="sponsor-section">
          <Sponsor />
        </Section>
        <Section id="pr-section">
          <Pr />
        </Section>
        <Section id="contactus-section">
          <ContactUs />
        </Section>
        <Section id="footer-section">
          <Footer />
        </Section>
      </div>
    );
  }
}
