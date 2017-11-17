import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';
import HeaderArtwork from '../Landing/HeaderArtwork';

const HeaderContainer = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  height: 90px;
  margin: 20px auto;
`;

const Container = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: ${colors.cyan};
  font-size: 62px;
  line-height: 58px;
  text-transform: uppercase;
  font-weight: 600;
  padding: 7px 0px;
  @media(max-width: 768px) {
    font-size: 38px;
    padding-top: 18px;
    line-height: 38px;
  }
`;

const Subtitle = styled.h2`
  font-size: 30px;
  line-height: 32px;
  color: ${colors.white};
  @media(max-width: 768px) {
    font-size: 24px;
  }
`;

const Detail = styled.p`
  margin: 15px 0 25px;
  font-size: 22px;

  u {
    color: ${colors.cyan};
  }

  @media(max-width: 768px) {
    font-size: 18px;
    letter-spacing: .3px;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo src="/static/img/logo.png" alt="" />
    <Container>
      <HeaderArtwork />
      <Title>{`SEMI_FINAL ROUND`}</Title>
      <Subtitle>{`ประกาศผู้มีสิทธ์เข้าสัมภาษณ์`}</Subtitle>
    </Container>
    <Detail>การสัมภาษณ์จะจัดขึ้นใน<u>วันที่ 26 พฤศจิกายน 2560 ณ อาคาร ซี.พี.ทาวเวอร์ 1 (สีลม)</u> <br />ซึ่งจะแบ่งออกเป็น 2 รอบ คือ <u>รอบช่วงเช้าตั้งแต่เวลา 9.00 น. ถึง 12.00 น.</u> และ <u>รอบช่วงบ่ายตั้งแต่เวลา 13.00 น. ถึง 18.00 น.</u></Detail>
  </HeaderContainer>
);

export default Header;
