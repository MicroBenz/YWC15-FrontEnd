import React from 'react';
import Router from 'next/router';
import styled from 'styled-components'

import GlowingButton from '../Core/GlowingButton'

const HomeButtom = styled(GlowingButton)`
  padding: 12px 18px;
  text-align: center;
  font-size: 26px;
  width: 65vw;
  margin: 5px auto 20px;
`;

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const Small = styled.p`
  text-align: center;
  font-size: 18px;
  margin-top: 60px;
  padding: 0;
`;

const Information = () => (
  <Wrapper className="columns">
    <div className="column">
      <Small>สำหรับใครต้องการกลับหน้าเว็บไซต์หลัก สามารถกดที่ปุ่มด้านล่างนี้ได้เลย</Small>
      <HomeButtom
        onClick={() => Router.push('/landing')}
      >เข้าสู่เว็บไซต์หลัก</HomeButtom>
    </div>
  </Wrapper>
);

export default Information
;
