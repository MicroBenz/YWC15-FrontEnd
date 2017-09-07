import React from 'react';
import styled from 'styled-components';

import content from './content.json';

const Columns = styled.div.attrs({
  className: 'columns'
})`
  margin-left: 0;
  margin-right: 0;
`;

const Column = styled.div.attrs({
  className: 'column'
})`
  padding-left: 0;
  padding-right: 0;
`;

const Copyright = styled.p`
  font-size: 16px;
  line-height: 21px;
  i {
    font-size: 16px;
    line-height: 16px;
  }
`;

const AllRightReserved = styled.p`
  font-size: 16px;
`;

const SponsorContainer = styled.div`
display: flex;
justify-content: center;
position: relative;

@media(max-width: 768px) {
  flex-direction: row;
  flex-wrap: wrap;
}
`;

const SponsorWrapper = styled.div`
position: relative;
margin: 25px;

@media(max-width: 768px) {
  margin: 10px;
}

img.circle {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
  height: 220px;
  width: 220px;
  max-width: none;
  margin: -28px;
  
  @media(max-width: 768px) {
    height: 178px;
    width: 178px;
    margin: -24px;
  }
}
`;

const SponsorLogo = styled.img`
display: flex;
height: 125px;
margin: 20px;
max-width: none;

@media(max-width: 768px) {
  height: 100px;
  margin: 15px;
}
`;

const Footer = () => (
  <div className="container">
    <SponsorContainer className="columns">
      {
        content.sponsors.map(s => (
          <SponsorWrapper key={s}>
            <img className="circle circle-1" src="/static/img/landing/materials/free1.png" alt="" />
            <img className="circle circle-2" src="/static/img/landing/materials/free2.png" alt="" />
            <img className="circle circle-3" src="/static/img/landing/materials/free3.png" alt="" />
            <SponsorLogo src={`/static/img/landing/sponsor/${s}.png`} alt="" />
          </SponsorWrapper>
        ))
      }
    </SponsorContainer>
    <Copyright>
      <i className="fa fa-copyright" aria-hidden="true" /> Copyright 2003-2017
    </Copyright>
    <AllRightReserved>Young Webmaster Camp, in association with Thai Webmaster Association. All right reserved.</AllRightReserved>
  </div>
);

export default Footer;
