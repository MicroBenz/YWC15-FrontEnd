import React from 'react';

import colors from '../../utils/colors';

const SectionHeader = ({ title, subtitle }) => (
  <div>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <style jsx>{`
      h1 {
        color: ${colors.cyan};
        font-size: 55px;
        line-height: 58px;
        text-transform: uppercase;
        font-weight: 600;
      }
      h2 {
        font-size: 20px;
      }
    `}</style>
  </div>
);

export default SectionHeader;
