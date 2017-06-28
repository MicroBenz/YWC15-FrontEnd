import React from 'react';
import { connect } from 'react-redux';

const Nav = (props) => (
  <h1>Nav Mockup: {props.test}</h1>
)
export default connect(
  ({ test }) => ({
    test: test.navTest,
  })
)(Nav);
