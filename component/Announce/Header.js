import React from 'react';
import styled from 'styled-components';

import SectionHeader from '../Landing/SectionHeader';

const HeaderContainer = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  height: 90px;
  margin: 20px auto;
`;

const Header = () => (
  <HeaderContainer>
    <Logo src="/static/img/logo.png" alt="" />
    <SectionHeader title="SEMI_FINAL_ANNOUNCEMENT" subtitle="ประกาศผู้มีสิทธ์เข้าสัมภาษณ์" />
  </HeaderContainer>
);

export default Header;
