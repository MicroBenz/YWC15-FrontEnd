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

const FinalistHeader = () => {
  return (
    <HeaderContainer>
      <Logo src="/static/img/logo.png" alt="" />
      <Container>
        <HeaderArtwork />
        <Title>FINAL ROUND</Title>
        <Subtitle>ประกาศผล...บลาๆๆๆ</Subtitle>
      </Container>
      <div className="columns">
        <div className="column">
          <Detail className="head"><b>สิ่งที่ต้องทำเมื่อติดรายชื่อผู้ผ่านค่าย</b></Detail>
          <Detail><b>1.</b> <b><u>อัพโหลดสลิป บลาๆๆๆ</u></b>สำหรับการแลกบัตรเข้าอาคาร ซี.พี.ทาวเวอร์ 1 (สีลม) และ <b><u>บัตรนักศึกษา</u></b>สำหรับการลงทะเบียนสัมภาษณ์ กรุณาแต่งกายด้วยชุดนักศึกษา</Detail>
          <Detail><b>2.</b> <b><u>การบ้านและสิ่งที่กรรมการสาขากำหนดไว้</u></b> กรุณาอ่านรายละเอียดการบ้านและสิ่งที่กรรมการให้เตรียมมาให้ครบถ้วน หากสาขาใดต้องใช้โน้ตบุ๊ค ควรชาร์ตแบตเตอรี่และเตรียมอินเทอร์เน็ตส่วนตัวมาให้พร้อม เนื่องจากสถานที่ไม่มีบริการอินเทอร์เน็ตให้ใช้</Detail>
          <Detail><b>3.</b> <b><u>Portfolio</u></b> สามารถนำมาประกอบการสัมภาษณ์ได้ สำหรับน้อง ๆ สาขาดีไซน์จะต้องนำ Portfolio มาด้วยทุกคน</Detail>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default FinalistHeader;
