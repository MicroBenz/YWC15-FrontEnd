import React from 'react';
import styled from 'styled-components'
import SectionHeader from './SectionHeader';

import content from './content.json'

const SponsorWarpper = styled.div`

`

const SponsorLogo = styled.div`
  display: flex;

  img {
    max-width: 180px;
    max-height: 180px;
    margin: 15px;
  }
  order: ${props => props.desktopOrder};
  
  @media(max-width: 860px) {
    flex-basis: 50%;
    order: ${props => props.mobileOrder};
    justify-content: ${props => props.mobileOrder % 2 === 0 ? 'flex-start' : 'flex-end'};
  }
`;

const SponsorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  justify-content: center;
`

const Sponsor = () => (
  <SponsorWarpper className="container">
    <SectionHeader title="Sponsor" subtitle="ผู้ใหญ่ใจดี" />
    <SponsorsContainer>
      {
        content.sponsors.map(s => (
          <SponsorLogo desktopOrder={s.dOrder} mobileOrder={s.mOrder}>
            <img src={`/static/img/landing/sponsor/${s.name}.png`} alt="" />
          </SponsorLogo>
        ))
      }
    </SponsorsContainer>
  </SponsorWarpper>
);

export default Sponsor;
