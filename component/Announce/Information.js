import React from 'react';
import Link from 'next/link';
import styled from 'styled-components'

import GlowingButton from '../Core/GlowingButton'

const HomeButtom = styled(GlowingButton)`
  padding: 10px 18px;
  text-align: center;
  font-size: 26px;
  width: 65vw;
  margin: 0 auto;
`;

const Information = () => (
  <div className="columns">
    <div className="column">
      <HomeButtom>เข้าสู่เว็บไซต์หลัก</HomeButtom>
    </div>
  </div>
);

export default Information
;
