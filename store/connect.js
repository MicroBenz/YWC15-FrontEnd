import React from 'react';
import withRedux from 'next-redux-wrapper';

import App from '../component/App';
import Nav from '../component/Nav/Nav';
import createStore from './createStore';

export default (mapStateToProps, mapDispatchToProps) => (Comp) => {
  const PagesLayout = props => (
    <div>
      <h1>This Heading is come from connect.js</h1>
      <App {...props}>
        <Comp {...props} />
      </App>
    </div>
  );

  PagesLayout.getInitialProps = async (data) => {
    if (Comp.getInitialProps) {
      await Comp.getInitialProps(data);
    }
  };

  return withRedux(
    createStore,
    mapStateToProps,
    mapDispatchToProps
  )(PagesLayout);
};
