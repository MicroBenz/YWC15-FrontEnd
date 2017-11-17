import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';
import HeaderArtwork from '../Landing/HeaderArtwork';

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 15px;
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
  margin: 8px 0;
  font-size: 20px;
  text-align: left;
  letter-spacing: .4px;

  &.center {
    text-align: center;
  }

  &.head {
    font-size: 26px;
  }

  &.heading {
    font-size: 22px;
  }

  u,b {
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
      <Title>{'SEMI_FINAL ROUND'}</Title>
      <Subtitle>{'ประกาศผู้มีสิทธิ์เข้าสัมภาษณ์'}</Subtitle>
    </Container>
    <div className="columns">
      <div className="column">
        <Detail className="center heading">การสัมภาษณ์จะจัดขึ้นใน<b><u>วันที่ 26 พฤศจิกายน 2560 ณ อาคาร ซี.พี.ทาวเวอร์ 1 (สีลม)</u></b> <br />ซึ่งจะแบ่งออกเป็น 2 รอบ คือ <b><u>รอบช่วงเช้าตั้งแต่เวลา 9.00 น. ถึง 12.00 น.</u></b> และ <b><u>รอบช่วงบ่ายตั้งแต่เวลา 13.00 น. ถึง 18.00 น.</u></b></Detail>
      </div>
    </div>
    <div className="columns">
      <div className="column">
        <Detail className="head"><b>สิ่งที่ต้องเตรียมมาในวันสัมภาษณ์</b></Detail>
        <Detail><b>1.</b> <b><u>บัตรประชาชน</u></b>สำหรับการแลกบัตรเข้าอาคาร ซี.พี.ทาวเวอร์ 1 (สีลม) และ <b><u>บัตรนักศึกษา</u></b>สำหรับการลงทะเบียนสัมภาษณ์ กรุณาแต่งกายด้วยชุดนักศึกษา</Detail>
        <Detail><b>2.</b> <b><u>การบ้านและสิ่งที่กรรมการสาขากำหนดไว้</u></b> กรุณาอ่านรายละเอียดการบ้านและสิ่งที่กรรมการให้เตรียมมาให้ครบถ้วน หากสาขาใดต้องใช้โน้ตบุ๊ค ควรชาร์ตแบตเตอรี่และเตรียมอินเทอร์เน็ตส่วนตัวมาให้พร้อม เนื่องจากสถานที่ไม่มีบริการอินเทอร์เน็ตให้ใช้</Detail>
        <Detail><b>3.</b> <b><u>Portfolio</u></b> สามารถนำมาประกอบการสัมภาษณ์ได้ สำหรับน้อง ๆ สาขาดีไซน์จะต้องนำ Portfolio มาด้วยทุกคน</Detail>
      </div>
    </div>
    <div className="columns">
      <div className="column is-8">
        <Detail className="head"><b>การเดินทางมาสัมภาษณ์</b></Detail>
        <Detail><b>1.</b> ด้วยรถไฟฟ้า BTS สามารถลงสถานีศาลาแดง ณ ทางออกที่ 2</Detail>
        <Detail><b>2.</b> ด้วยรถไฟฟ้า MRT สามารถลงสถานีสีลม ณ ทางออกที่ 2 โดยเดินเรียบทางเท้าไปตามถนนสีลม</Detail>
        <Detail><b>3.</b> ด้วยรถประจำทาง สามารถขึ้นใช้บริการสาย 15, 77, 155, 504, 177, 76</Detail>
      </div>
      <div className="column">
        <Detail className="head"><b>สอบถามเพิ่มเติมติดต่อ</b></Detail>
        <Detail><b>พี่เบ๊บ:</b> 064-174-7080</Detail>
        <Detail><b>พี่ฟง:</b> 092-458-7067</Detail>
        <Detail><b>พี่เบนซ์:</b> 085-666-7571</Detail>
      </div>
    </div>
  </HeaderContainer>
);

export default Header;
