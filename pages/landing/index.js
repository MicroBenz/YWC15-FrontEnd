import React, { Component } from 'react';

// import connect from '../../store/connect';

import Welcoming from '../../component/Landing/Welcoming';
import WhatIsYWC from '../../component/Landing/WhatIsYWC';
import Guru from '../../component/Landing/Guru';
import Register from '../../component/Landing/Register';
import Timeline from '../../component/Landing/Timeline';
import Map from '../../component/Landing/Map';
import Gallery from '../../component/Landing/Gallery';
import FAQ from '../../component/Landing/FAQ';
import ContactUs from '../../component/Landing/ContactUs';

export default class LandingPage extends Component {
  render() {
    // const { user } = this.props;
    return (
      <div>
        <section className="landing-section welcoming-section">
          <Welcoming />
        </section>
        <section className="landing-section what-is-ywc-section">
          <WhatIsYWC />
        </section>
        <section className="landing-section guru-section">
          <Guru />
        </section>
        <section className="landing-section register-section">
          <Register />
        </section>
        <section className="landing-section timeline-section">
          <Timeline />
        </section>
        <section className="landing-section map-section">
          <Map />
        </section>
        <section className="landing-section gallery-section">
          <Gallery />
        </section>
        <section className="landing-section faq-section">
          <FAQ />
        </section>
        <section className="landing-section contactus-section">
          <ContactUs />
        </section>
        <style jsx>{`
          .landing-section {
            padding: 50px 0px;
            text-align: center;
          }  
        `}</style>
      </div>
    );
  }
}
