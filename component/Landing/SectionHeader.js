import React from 'react';

import colors from '../../utils/colors';
import HeaderArtwork from './HeaderArtwork';

const SectionHeader = ({ title = '', subtitle = '' }) => (
  <div className="section-header">
    <HeaderArtwork />
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <style jsx>{`
      .section-header {
        width: fit-content;
        margin: 0 auto;
        margin-bottom: 30px;
      }
      h1 {
        color: ${colors.cyan};
        font-size: 62px;
        line-height: 58px;
        text-transform: uppercase;
        font-weight: 600;
        padding: 7px 0px;
      }
      h2 {
        font-family: 'Supermarket';
        font-size: 30px;
        line-height: 32px;
        color: ${colors.white};
      }
    `}</style>
  </div>
);

export default SectionHeader;
