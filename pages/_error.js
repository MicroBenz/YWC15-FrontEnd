import React from 'react';

export default class Error extends React.Component {
  static getInitialProps({ res }) {
    res.redirect('/');
  }

  render() {
    return (
      <div />
    );
  }
}
