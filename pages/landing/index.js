import React from 'react';
import { injectGlobal } from 'styled-components';

import Hero from '../../component/Landing/Hero';
import Whatis from '../../component/Landing/Whatis';
import Guru from '../../component/Landing/Guru';
import Categories from '../../component/Landing/Categories';
import Timeline from '../../component/Landing/Timeline';
import Galleries from '../../component/Landing/Galleries';
import Location from '../../component/Landing/Location';
import QA from '../../component/Landing/QA';
import Sponser from '../../component/Landing/Sponser';
import Pr from '../../component/Landing/Pr';

import Nav from '../../component/Nav/Nav';

injectGlobal`
  body {
    color: white;
    background: url('../../static/img/landing/bg-back.png');
    background-size: cover;
    background-attachment: fixed;
  }
`;

class LandingPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <Nav /> */}
        <Hero />
        <Whatis />
        <Guru />
        <Categories />
        <Timeline />
        <Galleries />
        <Location />
        <QA />
        <Sponser />
        <Pr />
      </div>
    );
  }
}

export default LandingPage;
