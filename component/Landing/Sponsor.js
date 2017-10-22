import React from 'react';
import styled, { css } from 'styled-components';
import SectionHeader from './SectionHeader';

import content from './content.json';

const SponsorWarpper = styled.div`

`

const SponsorLogo = styled.div`
  display: flex;

  img {
    ${props => props.vip && css`
      max-width: 175px;
      max-height: 175px;
    `}
    ${props => props.gold && css`
      max-width: 150px;
      max-height: 150px;
    `}
    ${props => props.silver && css`
      max-width: 135px;
      max-height: 135px;
    `}
    margin: 15px;

    @media(max-width: 860px) {
      ${props => props.vip && css`
        max-width: 150px;
        max-height: 150px;
      `}
      ${props => props.gold && css`
        max-width: 135px;
        max-height: 135px;
      `}
      ${props => props.silver && css`
        max-width: 110px;
        max-height: 110px;
      `}
    }
  }
  order: ${props => props.desktopOrder};

  @media(max-width: 860px) {
    flex-basis: 50%;
    order: ${props => props.mobileOrder};
    justify-content: center;
  }
`;

const SponsorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  ${props => props.silver && css`
    margin: 0 auto;
    padding: 0px 13vw;

    @media(max-width: 860px) {
      margin: 0 auto;
      padding: 0px 7vw;
    }
  `}
`;

const Sponsor = () => (
  <SponsorWarpper className="container">
    <SectionHeader title="Sponsor" subtitle="ผู้ใหญ่ใจดี" />
    <SponsorsContainer>
      {
        content.sponsors.map(s => (
          <SponsorLogo key={s.name} desktopOrder={s.dOrder} mobileOrder={s.mOrder} vip>
            <img src={`/static/img/landing/sponsor/${s.name}.png`} alt="" />
          </SponsorLogo>
        ))
      }
    </SponsorsContainer>
    <SponsorsContainer>
      {
        content.goldSponsors.map(s => (
          <SponsorLogo key={s.name} desktopOrder={s.dOrder} mobileOrder={s.mOrder} gold>
            <img src={`/static/img/landing/sponsor/gold/${s.name}.png`} alt="" />
          </SponsorLogo>
        ))
      }
    </SponsorsContainer>
    <SponsorsContainer silver>
      {
        content.silverSponsors.map(s => (
          <SponsorLogo key={s.name} desktopOrder={s.dOrder} mobileOrder={s.mOrder} silver>
            <img src={`/static/img/landing/sponsor/silver/${s.name}.png`} alt="" />
          </SponsorLogo>
        ))
      }
    </SponsorsContainer>
  </SponsorWarpper>
);

export default Sponsor;
