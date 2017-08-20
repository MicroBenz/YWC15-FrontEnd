import React from 'react';

import Loader from './Loader';

const FullAreaLoader = () => (
  <div className="full-area-loader">
    <Loader />
    <style jsx>{`
      width: 100%;
      height: 100%;
    `}</style>
  </div>
);

export default FullAreaLoader;
