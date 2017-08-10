import React from 'react';

import colors from '../../utils/colors';

const WhatIsYWC = () => {
  return (
    <div className="welcoming-container">
      <div className="ywc-border">
        <div className="text-container">
          <h1>What is ywc</h1>
        </div>
      </div>
      <style jsx>{`
        h1 {
          font-size: 30px;
        }  
        .ywc-border {
          width: 500px;
          margin: 0 auto;
          border: 6px inset ${colors.cyan};
          border-left: 0px;
          border-right: 0px;
          .text-container {
            border: 4px solid ${colors.cyan};
            border-top: none;
            border-bottom: none;
            margin: 15px 0px;
          }
        }
      `}</style>
    </div>
  );
};

export default WhatIsYWC;
