import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SectionHeader from './SectionHeader';
import RegisterMajor from './RegisterMajor';

const Container = styled.div.attrs({
  className: 'container'
})`
  @media(max-width: 768px) {
    padding: 0 5%;
  }
`;

const Register = ({ registerStat }) => (
  <div>
    <SectionHeader title="Register" subtitle="สมัครค่าย" />
    <Container>
      <div className="columns">
        <div className="column">
          <RegisterMajor major="content" count={registerStat.content} />
        </div>
        <div className="column">
          <RegisterMajor major="design" count={registerStat.design} />
        </div>
        <div className="column">
          <RegisterMajor major="marketing" count={registerStat.marketing} />
        </div>
        <div className="column">
          <RegisterMajor major="programming" count={registerStat.programming} />
        </div>
      </div>
    </Container>
  </div>
);

export default connect(
  state => ({
    registerStat: state.app.registerStat
  })
)(Register);
