import React from 'react';
import styled from 'styled-components';

import ActionContainer from '../Form/ActionContainer';
import FormButton from '../Form/FormButton';
import FullScreenModal from '../Core/FullScreenModal';
import colors from '../../utils/colors';

const getMajor = (major) => {
  if (major === 'programming') return 'WEB PROGRAMMING';
  if (major === 'design') return 'WEB DESIGN';
  if (major === 'marketing') return 'WEB MARKETING';
  if (major === 'content') return 'WEB CONTENT';
  return '';
};

const ActionButton = styled(FormButton)`
  width: 120px;
`;

const Label = styled.h2`
  font-family: 'Cordia New';
  font-size: 35px;
  font-weight: 600;
  @media(max-width: 768px) {
    font-size: 28px;  
  }
`;

const ValueLabel = styled.span`
  font-weight: 800;
  color: ${colors.cyan};
`;

const ConfirmLabel = styled.p`
  font-family: 'Cordia New';
  text-align: center;
  font-weight: 600;
  font-size: 34px;
  ${props => props.small && 'font-size: 22px;'}
  @media(max-width: 768px) {
    font-size: 30px;  
    ${props => props.small && 'font-size: 19px;'}
  }
`;

const DetailContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 20px;
  @media(max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const MajorImageColumn = styled.div.attrs({
  className: 'column'
})`
  display: flex;
  justify-content: flex-end;
  @media(max-width: 768px) {
    justify-content: center;  
  }
`;

const DetailColumn = styled.div.attrs({
  className: 'column'
})`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const ModalContainer = styled.div`
  background-color: rgba(0,0,0,0.8);
  width: 100%;
  padding: 20px 0;
`;

const ModalTextContainer = styled.div`
  margin-bottom: 10px;
  h3 {
    font-family: 'Cordia New';
    font-weight: 600;
    font-size: 26px;
  }
`;

const StepVerify = props => (
  <div style={{ pointerEvents: 'auto' }}>
    <DetailContainer>
      <div className="columns">
        <MajorImageColumn>
          <img src={`/static/img/roles/${props.major}.png`} alt={props.major} />
        </MajorImageColumn>
        <DetailColumn>
          <Label>น้อง <ValueLabel>{props.firstName} {props.lastName}</ValueLabel></Label>
          <Label>สาขา <ValueLabel>{getMajor(props.major)}</ValueLabel></Label>
        </DetailColumn>
      </div>
    </DetailContainer>
    <ConfirmLabel>ยืนยันการส่งคำตอบ</ConfirmLabel>
    <ActionContainer>
      <ActionButton title="ยืนยัน" onClick={props.onSubmit} />
      <ActionButton title="แก้ไขข้อมูล" onClick={props.onBack} />
    </ActionContainer>
    <ConfirmLabel small>** หากยืนยันแล้วจะไม่สามารถกลับมาแก้ไขข้อมูลได้ **</ConfirmLabel>
    {props.isShowPopup && (
      <FullScreenModal>
        <ModalContainer>
          <ModalTextContainer>
            <h3>เสร็จสิ้นการสมัคร คำตอบถูกบันทึกเรียบร้อย</h3>
            <h3>ไว้เจอกันรอบสัมภาษณ์นะ</h3>
          </ModalTextContainer>
          <FormButton
            title="ตกลง"
            style={{ margin: '0 auto', padding: '4px 0' }}
            onClick={props.onDismissPopup}
          />
        </ModalContainer>
      </FullScreenModal>
    )}
  </div>
);

export default StepVerify;
