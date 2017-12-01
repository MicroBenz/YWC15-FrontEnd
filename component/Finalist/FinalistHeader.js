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
        <Subtitle>ประกาศผลผู้ผ่านการคัดเลือกเข้าร่วมค่าย YWC 15</Subtitle>
      </Container>
      <div className="columns">
        <div className="column">
          <Detail className="head">น้องๆที่ผ่านการคัดเลือกเป็น<b>ตัวจริง</b>จะต้องทำการยืนยันสิทธิ์ดังนี้</Detail>
          <Detail><b>1.</b> <b><u>โอนเงินยืนยันสิทธิ์</u></b> และอัพโหลดหลักฐานการโอนเงินผ่านหน้าเว็บ<a href="#upload-slip">ที่นี่</a> ภายในวันที่ 6 ธันวาคม 2560 เวลา 23.59น. โดยโอนตามยอดเงินที่แสดงอยู่กับชื่อของน้อง</Detail>
          <Detail>**การโอนเงินนี้เป็นการยืนยันว่าน้องๆสามารถมาเข้าค่ายได้จริงๆ  ในวันจบค่ายจะมีการคืนเงินให้กับน้องๆทุกคนที่เข้าร่วม**</Detail>
          <Detail><b>2.</b> <b><u>ส่งใบขออนุญาต</u></b>จากผู้ปกครองให้กับทีมงานค่ายในวันที่ 4 มกราคม 2561</Detail>
          <Detail>**หากน้องๆตัวจริงสละสิทธิ์หรือไม่ได้ทำการยืนยันสิทธิ์ตามทีมงานกำหนดไว้  ทางทีมงานจะติดต่อน้องๆในรายชื่อสำรองในลำดับถัดไปเพื่อเข้าร่วมค่าย**</Detail>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default FinalistHeader;
