import React from 'react';

import SectionHeader from './SectionHeader';

const Map = () => (
  <div>
    <SectionHeader title="Location" subtitle="แผนที่เดินทาง" />
    <div className="container">
      <img src="/static/img/landing/map.png" alt="แผนที่การเดินทาง" />
    </div>
  </div>
);

export default Map;
