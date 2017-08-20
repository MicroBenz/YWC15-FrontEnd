import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import ReactGA from 'react-ga';

import config from '../config';
import { actions as appActions } from '../store/reducers/app';
import Nav from './Nav/Nav';

@connect(
  ({ app }) => ({
    isFirstLoad: app.isFirstLoad
  }),
  { ...appActions }
)
export default class App extends Component {
  componentDidMount() {
    console.log('apps mounted');
    if (this.props.isFirstLoad) {
      window.localStorage.removeItem('ywc15Token');
      ReactGA.initialize(config.gaTrackingID);
      Router.onRouteChangeComplete = () => {
        console.log('route changed', window.location.pathname);
        ReactGA.pageview(window.location.pathname);
      };
      this.props.doneFirstLoad();
    }
  }
  
  render() {
    return (
      <div style={{ height: '100vh', overflowY: 'scroll' }}>
        {this.props.children}
      </div>
    );
  }
}
