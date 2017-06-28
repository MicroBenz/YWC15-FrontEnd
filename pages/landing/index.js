import React, { Component } from 'react';
import connect from '../../store/connect';

@connect(
  ({ test }) => ({
    test: test.shouldBeOne
  })
)
export default class LandingPage extends Component {
  render() {
    return (
      <h1>Say Hi to Next.js <i className="fa fa-facebook"/> And this shouldBeOne = {this.props.test}</h1>
    )
  }
}
