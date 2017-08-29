import React from 'react';
import styled from 'styled-components';

import SectionHeader from './SectionHeader';
import FrameBox from '../Core/FrameBox';
import colors from '../../utils/colors';

const QAs = [
  {
    q: 'ทำเว็บไม่เป็น ไม่เคยทำเว็บ สมัครได้ไหม ?',
    a: `ได้แน่นอนค่ะ เพราะคนเราไม่ได้มีความถนัดเหมือนกัน เช่นเดียวกับการทำเว็บไซต์ในค่าย #YWC14 ที่เน้นการทำงานเป็นทีมของทั้ง 4 ด้าน
    ใครชอบเขียนหรือเล่าเรื่องอะไรจนเพื่อนร้องว้าว แนะนำเข้าสาขา Content เลย
    ส่วนคนที่ว่างเมื่อไหร่เป็นต้องหยิบจับดินสอปากกามาวาดภาพหรือร่างกราฟฟิคต่าง ๆ ก็สาขา
    Design สำหรับคนที่วิสัยทัศน์กว้างไกล ชอบจัดการ วางแผน ต้องเป็นสาขา Marketing และสุดท้าย
    ใครที่มีพื้นฐานการเขียนเว็บในระดับหนึ่งก็แนะนำสาขา Programming
    ทั้งหมดนี้ ขอแค่น้องมีความพยายามที่จะเรียนรู้ พัฒนาตัวเองก่อนเข้าค่าย มีพื้นฐานมาเล็กน้อย ก็สมัครได้แล้วจ้า`
  },
  {
    q: 'ไม่มี Facebook สามารถสมัครได้ไหม ?',
    a: `ไม่ได้นะคะ เพราะการสมัครเข้าค่ายจะต้องยืนยันตัวเองด้วยการ Log in ผ่าน
    Facebook นอกจากนี้เราจะมีกลุ่มที่ใช้ในการติดต่อสื่อสารระหว่างก่อนค่ายและหลังค่ายสายสัมพันธ์ของครอบครัว YWC
    นี้ไม่ได้จบเพียง 4 วัน 3 คืนแน่นอน ยังมีข่าวสารและกิจกรรมเฉพาะของชาว YWC ที่สามารถรู้ได้แค่ในกลุ่มเท่านั้น`
  },
  {
    q: 'พี่ ๆ ครับค่าย #YWC14 ปิดรับสมัครวันที่เท่าไรครับ แล้วจะรู้ได้ยังไงว่าผ่านการคัดเลือกแล้ว ?',
    a: `ค่ายของเราจะปิดรับสมัครวันที่ 15 พฤศจิกายนนี้ค่ะ น้องคนไหนยังไม่สมัคร รีบสมัครด่วน
    และเพื่อความสะดวกในการติดตามข่าวสาร พวกเราจะทำการแจ้งถึงการประกาศรายชื่อผู้ได้รับคัดเลือกบนหน้าเว็บไซต์
    น้อง ๆ ไปกด See First ที่หน้าแฟนเพจของพวกเราเพื่อให้รู้ทันข่าวสารอย่างใกล้ชิด หรือน้อง ๆ
    จะเข้ามาตรวจสอบรายชื่อโดยตรงที่เว็บไซต์ของเราก็ได้เลย`
  },
  {
    q: 'อยากกระจายข่าวค่ายนี้ให้เพื่อน ๆ รู้ต้องทำยังไง ?',
    a: `ง่ายมาก แค่ใช้ Hashag ว่า #ywc14 บน Social Network ของน้องๆ ได้เลย
    และสำหรับใครที่มีเว็บไซต์ก็ยังสามารถเข้าไปที่หน้า Media เพื่อทำการโหลดแบนเนอร์ไปใช้โปรโมทค่ายได้ด้วยนะ`
  },
];

const QuestionBox = styled(FrameBox)`
  width: 100% !important;
  padding: 15px;
  text-align: left;
  margin: 15px 0;
  cursor: pointer;
  opacity: 0.8;
  transform: scale(.95);
  transition: all .4s;

  &.active {
    transform: scale(1);
    opacity: 1;
    color: ${colors.cyan};
  }

  h1 {
    font-size: 16px;
    letter-spacing: 6px;
    line-height: 1;
    padding: 6px 0;
    opacity: 0.6;
  }

  h2 {
    font-size: 20px;
  }
`;

const AnswerBox = styled(FrameBox)`
  width: 100% !important;
  padding: 15px;
  text-align: left;
  margin: 15px 0;

  h3 {
    color: ${colors.cyan};
    font-size: 18px;
    letter-spacing: 12px;
    line-height: 1;
    padding: 6px 0;
    opacity: 0.6;
  }

  h1 {
    font-size: 32px;
    color: ${colors.cyan};
  }

  p {
    font-size: 20px;
    letter-spacing: .2px;
    text-indent: 15px;
  }
`;

const Container = styled.div.attrs({
  className: 'container'
})`
  @media(max-width: 768px) {
    padding: 0 5%;
  }
`;

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  render() {
    return (
      <Container>
        <SectionHeader title="Q & A" subtitle="ถาม - ตอบ" />
        <div className="columns">
          <div className="column">
            {
              QAs.map((q, key) => (
                <QuestionBox
                  onClick={() => this.setState({ current: key })}
                  className={this.state.current === key && 'active'}
                >
                  <h1>QUESTION</h1>
                  <h2>{q.q}</h2>
                </QuestionBox>
              ))
            }
          </div>
          <div className="column is-two-thirds">
            <AnswerBox>
              <h3 className="header">QUESTION/ANSWER</h3>
              <h1>
                { QAs[this.state.current].q }
              </h1>
              <p>
                { QAs[this.state.current].a }
              </p>
            </AnswerBox>
          </div>
        </div>
      </Container>
    );
  }
}

export default QA;
