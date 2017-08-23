import React from 'react';
import { connect } from 'react-redux';

import SectionHeader from './SectionHeader';
import RegisterMajor from './RegisterMajor';

const Register = ({ registerStat }) => (
  <div>
    <SectionHeader title="Register" subtitle="สมัครค่าย" />
    <div className="container">
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
    </div>
  </div>
);

export default connect(
  state => ({
    registerStat: state.app.registerStat
  })
)(Register);
