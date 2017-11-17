import React from 'react';
import Router from 'next/router';
import styled from 'styled-components'

import GlowingButton from '../Core/GlowingButton'

const HomeButtom = styled(GlowingButton)`
  padding: 10px 18px;
  text-align: center;
  font-size: 26px;
  width: 65vw;
  margin: 15px auto 30px;
`;

const Wrapper = styled.div`
  margin-bottom: 40px;
`

const Information = () => (
  <Wrapper className="columns">
    <div className="column">
      <HomeButtom
        onClick={() => Router.push('/landing')}
      >เข้าสู่เว็บไซต์หลัก</HomeButtom>
    </div>
  </Wrapper>
);

export default Information
;
