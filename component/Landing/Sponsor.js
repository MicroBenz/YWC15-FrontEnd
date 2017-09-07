import React from 'react';
import styled from 'styled-components'
import SectionHeader from './SectionHeader';

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
      <SponsorLogo src="/static/img/landing/sponsor/TWA.png" alt="" />
      <SponsorLogo src="/static/img/landing/sponsor/SCB.png" alt="" />
      <SponsorLogo src="/static/img/landing/sponsor/CP_ALL.png" alt="" />
      <SponsorLogo src="/static/img/landing/sponsor/ABAC.png" alt="" />
    </div>
  </SponsorWarpper>
);

export default Sponsor;
