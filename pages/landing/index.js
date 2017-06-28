import React, { Component } from 'react';

import connect from '../../store/connect';
import Api from '../../utils/api';

@connect(
  ({ test }) => ({
    test: test.shouldBeOne
  })
)
export default class LandingPage extends Component {
  componentDidMount() {
    Api.get('http://api.fixer.io/latest2')
      .then(res => console.log(res))
  }

  render() {
    return (
      <h1>Say Hi to Next.js <i className="fa fa-facebook"/> And this shouldBeOne = {this.props.test}</h1>
    )
  }
}
