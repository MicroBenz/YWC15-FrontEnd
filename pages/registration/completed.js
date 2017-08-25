import React, { Component } from 'react';
import Router from 'next/router';
import styled from 'styled-components';

import connect from '../../store/connect';

const CompletedRegistration = (props) => (
  <h1>Completed!</h1>
);

export default connect(
  state => ({
    registerData: state.register
  })
)(CompletedRegistration);
