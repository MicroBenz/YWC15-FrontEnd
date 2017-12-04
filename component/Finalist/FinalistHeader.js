import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

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

const TitleContainer = styled.div`
  margin-bottom: 20px;
`;

const Container = styled.div`
  width: fit-content;
  margin: 0 auto;
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
  ${props => props.italic && `
    font-style: italic;
    text-align: center;
  `}
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

const BankAccountContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BoxContainer = styled.div`
  border: 1px solid ${colors.cyan};
  padding: 18px 15px;
  position: relative;
  text-align: center;
  margin: 30px 0;
  transition: all .2s;
  opacity: .7;
  filter: grayscale(20%);
  background-color: ${rgba(colors.darkCyan2, 0.4)};
  box-shadow: 0.5px 0.5px 12px rgba(102, 252, 241, 0.63);
  opacity: 1;
  filter: none;
  &:before {
    display: block;
    content: "";
    width: 10px;
    height: 10px;
    top: -2px;
    left: -2px;
    position: absolute;
    border-top: 4px solid ${colors.cyan};
    border-left: 4px solid ${colors.cyan};
  }
  &:after {
    display: block;
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    top: -2px;
    right: -2px;
    border-top: 4px solid ${colors.cyan};
    border-right: 4px solid ${colors.cyan};
  }
`;

const InnerContainer = styled.div`
  &:before {
    display: block;
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    bottom: -2px;
    left: -2px;
    border-bottom: 4px solid ${colors.cyan};
    border-left: 4px solid ${colors.cyan};
  }
  &:after {
    display: block;
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    bottom: -2px;
    right: -2px;
    border-bottom: 4px solid ${colors.cyan};
    border-right: 4px solid ${colors.cyan};
  }
  p {
    text-align: center; 
    font-size: 24px;  
  }
`;


const FinalistHeader = () => {
  return (
    <HeaderContainer>
      <Logo src="/static/img/logo.png" alt="" />
      <TitleContainer>
        <Container>
          <HeaderArtwork />
          <Title>Congratulations</Title>
        </Container>
        <Subtitle>ประกาศผลผู้ผ่านการคัดเลือกเข้าร่วมค่าย YWC 15</Subtitle>
      </TitleContainer>
      <div className="columns">
        <div className="column">
          <Detail className="head">น้อง ๆ ที่ผ่านการคัดเลือกเป็น<b>ตัวจริง</b>จะต้องทำการยืนยันสิทธิ์ดังนี้</Detail>
          <Detail><b>1.</b> <b><u>โอนเงินยืนยันสิทธิ์</u></b> และอัพโหลดหลักฐานการโอนเงินผ่านหน้าเว็บ<a href="#upload-slip">ที่นี่</a> ภายในวันที่ 6 ธันวาคม 2560 เวลา 23.59น. โดยโอนตามยอดเงินที่แสดงอยู่กับชื่อของน้อง</Detail>
          <BankAccountContainer>
            <BoxContainer>
              <InnerContainer>
                <Detail>ชื่อบัญชี: นางสาวธันย​นันท์​ ธ​นัน​โชค​ไพศาล</Detail>
                <Detail>ธนาคารไทยพาณิชย์ สาขาสยามสแควร์</Detail>
                <Detail>หมายเลขบัญชี: 038-464918-6</Detail>
              </InnerContainer>
            </BoxContainer>
          </BankAccountContainer>
          <Detail italic>**การโอนเงินนี้เป็นการยืนยันว่าน้องๆสามารถมาเข้าค่ายได้จริง ๆ   ในวันจบค่ายจะมีการคืนเงินให้กับน้อง ๆ ทุกคนที่เข้าร่วม**</Detail>
          <Detail><b>2.</b> <b><u>ส่งใบขออนุญาต</u></b>จากผู้ปกครองให้กับทีมงานค่ายในวันที่ 4 มกราคม 2561</Detail>
          <Detail italic>**หากน้อง ๆ ตัวจริงสละสิทธิ์หรือไม่ได้ทำการยืนยันสิทธิ์ตามทีมงานกำหนดไว้  ทางทีมงานจะติดต่อน้อง ๆ ในรายชื่อสำรองในลำดับถัดไปเพื่อเข้าร่วมค่าย**</Detail>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default FinalistHeader;
