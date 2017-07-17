import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

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
      // Register router event to track Google Analytics
      // Router.onRouteChangeStart = () => {
      //   console.log('route change');
      // }
      Router.onRouteChangeComplete = () => {
        console.log('route changed', window.location.pathname);
      }
      this.props.doneFirstLoad();
    }
  }
  
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
