import React from 'react';

const Welcoming = () => {
  return (
    <div className="welcoming-container">
      <img src="/static/img/landing/welcoming/free.png" alt="ฟรีตลอดค่าย" className="free-image" />
      <div className="camp-branding">
        <img src="/static/img/landing/welcoming/central_hex.png" className="central-hex" />
        <img src="/static/img/logo.png" alt="YWC15" className="camp-logo" />
      </div>
      <style jsx>{`
        .welcoming-container {
          position: relative;
          .free-image {
            width: 170px;
            position: absolute;
            top: 0px;
            left: 20px;
          }
          .camp-branding {
            width: 45%;
            margin: 0 auto;
            position: relative;
            .central-hex {
              width: 100%;
            }
            .camp-logo {
              position: absolute;
              left: 18%;
              top: 34%;
              width: 64%;
            }
          }
        }
        
      `}</style>
    </div>
  );
};

export default Welcoming;
