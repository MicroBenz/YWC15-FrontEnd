import React from 'react';
import styled from 'styled-components';

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

const Footer = () => (
  <div className="container">
    <Columns>
      <Column>
        <img src="/static/img/landing/materials/logo_cp.png" alt="" />
      </Column>
      <Column>
        <img src="/static/img/landing/materials/logo_scb.png" alt="" />
      </Column>
      <Column>
        <img src="/static/img/landing/materials/logo_abac.png" alt="" />
      </Column>
      <Column>
        <img src="/static/img/landing/materials/logo_donuts.png" alt="" />
      </Column>
      <Column>
        <img src="/static/img/landing/materials/logo_3ds.png" alt="" />
      </Column>
    </Columns>
    <Copyright>
      <i className="fa fa-copyright" aria-hidden="true" /> Copyright 2003-2017
    </Copyright>
    <AllRightReserved>Young Webmaster Camp, in association with Thai Webmaster Association. All right reserved.</AllRightReserved>
  </div>
);

export default Footer;
