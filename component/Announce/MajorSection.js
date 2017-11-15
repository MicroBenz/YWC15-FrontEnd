import React from 'react';
import Major from './Major'

const MajorSection = () => (
  <div className="columns">
    { [...Array(4)].map(e => (
      <div className="column">
        <Major />
      </div>
    ))}
  </div>
);

export default MajorSection;
