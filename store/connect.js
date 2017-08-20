import React from 'react';
import withRedux from 'next-redux-wrapper';

import App from '../component/App';
import colors from '../utils/colors';
import createStore from './createStore';

export default (mapStateToProps, mapDispatchToProps) => (Comp) => {
  const PagesLayout = props => (
    <App {...props}>
      <Comp {...props} />
      <style jsx global>{`
        .section-header {
          color: ${colors.cyan};
        }
      `}</style>
    </App>
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
