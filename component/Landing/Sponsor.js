import React from 'react';
import styled from 'styled-components'
import SectionHeader from './SectionHeader';

import content from './content.json'

const SponsorLogo = styled.img`
  width: 180px;
  margin: 15px;
`;

const SponsorWarpper = styled.div`
  
`

const Sponsor = () => (
  <SponsorWarpper className="container">
    <SectionHeader title="Sponsor" subtitle="ผู้ใหญ่ใจดี" />
    <div className="sponsors">
      {
        content.sponsors.map(s => (
          <SponsorLogo src={`/static/img/landing/sponsor/${s}.png`} alt="" />
        ))
      }
    </div>
  </SponsorWarpper>
);

export default Sponsor;
