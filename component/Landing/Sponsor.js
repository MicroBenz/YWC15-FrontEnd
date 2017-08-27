import React from 'react';
import styled from 'styled-components'
import SectionHeader from './SectionHeader';

const SponsorLogo = styled.img`
  width: 180px;
  margin: 10px;
`;

const SponsorWarpper = styled.div`
  
`

const Sponsor = () => (
  <SponsorWarpper className="container">
    <SectionHeader title="Sponsor" subtitle="ผู้ใหญ่ใจดี" />
    <div className="sponsors">
      {
        [1,2,3,4,5,6,7,8,9,10,11,12,13].map(e => (
          <SponsorLogo src="/static/img/landing/cp-app.jpg" alt="" />
        ))
      }
      
    </div>
  </SponsorWarpper>
);

export default Sponsor;
