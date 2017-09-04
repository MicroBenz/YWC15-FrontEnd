import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { rgba } from 'polished';

import TextInput from '../Form/TextInput';
import TextArea from '../Form/TextArea';
import Dropdown from '../Form/Dropdown';
import ActionContainer from '../Form/ActionContainer';
import FormButton from '../Form/FormButton';
import colors from '../../utils/colors';
import dropdownData from './dropdown-data.json';
import { actions as registerActions } from '../../store/reducers/register';

const DiseaseContainer = styled.div`
  ${props => props.active && `
    margin-top: 30px;
    margin-bottom: 13px;
    padding: 12px 15px;
    border: 1px solid ${colors.formBg};
    position: relative;
  `}
  ${props => !props.active && `
    margin: 12px 0px;
  `}
`;

const Switcher = styled.div`
  font-family: 'Cordia New';
  font-size: 22px;
  font-weight: 600;
  > * {
    display: inline-block;
  }
  > p {
    margin-right: 15px;
  }
  ${props => props.active && `
    position: absolute;
    top: -19px;
  `}
  ${props => !props.active && `
    padding-left: 16px;
  `}
`;

const SwitchItem = styled.div`
  background-color: ${colors.formBg};
  width: 50px;
  text-align: center;
  cursor: pointer;
  ${props => props.active && `
    background-color: ${rgba(colors.cyan, 0.6)};
  `}
`;

@connect(
  null,
  { setField: registerActions.setField, navigateStep: registerActions.navigateStep }
)
export default class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasDisease: props.disease !== '' && props.med !== '' && props.medAllergy !== ''
    };
    this.toggleDisease = this.toggleDisease.bind(this);
  }

  toggleDisease(hasDisease) {
    if (!hasDisease) {
      this.props.setField('disease', '');
      this.props.setField('med', '');
      this.props.setField('medAllergy', '');
    }
    this.setState({ hasDisease });
  }

  render() {
    const { props } = this;
    const { hasDisease } = this.state;
    return (
      <form style={{ pointerEvents: 'auto' }}>
        <div className="columns">
          <div className="column">
            <TextArea label="ที่อยู่" field="address" value={props.address} />
            <div className="columns">
              <div className="column">
                <Dropdown
                  field="province"
                  label="จังหวัด"
                  value={props.province}
                  items={dropdownData.province}
                />
              </div>
              <div className="column">
                <TextInput label="รหัสไปรษณีย์" field="postalCode" value={props.postalCode} />
              </div>
            </div>
            <TextInput label="Email" field="email" value={props.email} />
            <TextInput label="เบอร์ติดต่อ (08x-xxx-xxxx)" field="phone" value={props.phone} />
            <div className="columns">
              <div className="column">
                <TextInput label="เบอร์ติดต่อฉุกเฉิน" field="emergencyPhone" value={props.emergencyPhone} />
              </div>
              <div className="column">
                <TextInput label="เกี่ยวข้องเป็น" field="emergencyPhoneRelated" value={props.emergencyPhoneRelated} />
              </div>
            </div>
            <TextInput label="ID Skype (กรณีสัมภาษณ์ทางออนไลน์ ถ้าไม่มีใส่ -)" field="skype" value={props.skype} />
          </div>
          <div className="column">
            <Dropdown
              field="shirtSize"
              label="ขนาดเสื้อ (รอบอก, ความยาว)"
              value={props.shirtSize}
              items={dropdownData.shirtSize}
            />
            <DiseaseContainer active={hasDisease}>
              <Switcher active={hasDisease}>
                <p>โรคประจำตัว</p>
                <SwitchItem active={hasDisease} onClick={() => this.toggleDisease(true)}>
                  <p>มี</p>
                </SwitchItem>
                <SwitchItem active={!hasDisease} onClick={() => this.toggleDisease(false)}>
                  <p>ไม่มี</p>
                </SwitchItem>
              </Switcher>
              {hasDisease && (
                <div>
                  <TextInput label="โรคประจำตัว" field="disease" value={props.disease} />
                  <TextInput label="ยาที่ใช้ประจำ" field="med" value={props.med} />
                  <TextInput label="ยาที่แพ้" field="medAllergy" value={props.medAllergy} />
                </div>
              )}
            </DiseaseContainer>
            <div className="columns">
              <div className="column">
                <Dropdown
                  field="food"
                  label="อาหารที่รับประทาน"
                  value={props.food}
                  items={dropdownData.food}
                />
              </div>
              <div className="column">
                <TextInput label="อาหารที่แพ้ (ถ้าไม่มีใส่ -)" field="foodAllergy" value={props.foodAllergy} />
              </div>
            </div>
          </div>
        </div>
        <ActionContainer>
          <FormButton title="Back" left onClick={props.onBack} />
          <FormButton style={{ width: '140px' }} title="Save & Next" right onClick={props.onSubmit} />
        </ActionContainer>
      </form>
    );
  }
}
