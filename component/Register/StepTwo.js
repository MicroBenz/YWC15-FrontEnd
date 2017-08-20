import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextInput from '../Form/TextInput';
import TextArea from '../Form/TextArea';
import Dropdown from '../Form/Dropdown';
import dropdownData from './dropdown-data.json';
import { actions as registerActions } from '../../store/reducers/register';

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit();
        }}
        style={{ pointerEvents: 'auto' }}
      >
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
            <TextInput label="เบอร์ติดต่อ" field="phone" value={props.phone} />
            <div className="columns">
              <div className="column">
                <TextInput label="เบอร์ติดต่อฉุกเฉิน" field="emergencyPhone" value={props.emergencyPhone} />
              </div>
              <div className="column">
                <TextInput label="เกี่ยวข้องเป็น" field="emergencyPhoneRelated" value={props.emergencyPhoneRelated} />
              </div>
            </div>
          </div>
          <div className="column">
            <Dropdown
              field="shirtSize"
              label="ขนาดเสื้อ (รอบอก, ความยาว)"
              value={props.shirtSize}
              items={dropdownData.shirtSize}
            />
            <div className="switcher">
              <p>โรคประจำตัว</p>
              <div className={`switch-item ${hasDisease && 'active'}`} onClick={() => this.toggleDisease(true)}>
                <p>มี</p>
              </div>
              <div className={`switch-item ${!hasDisease && 'active'}`} onClick={() => this.toggleDisease(false)}>
                <p>ไม่มี</p>
              </div>
            </div>
            {hasDisease && <h1>มีโรค</h1>}
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
                <TextInput label="อาหารที่แพ้" field="foodAllergy" value={props.foodAllergy} />
              </div>
            </div>
          </div>
        </div>
        <button type="button" onClick={() => props.navigateStep(1)}>Back</button>
        <button>Next</button>
        <style jsx>{`
          .switcher {
            font-family: 'Cordia New';
            font-size: 22px;
            font-weight: 600;
            > * {
              display: inline-block;
            }
            > p {
              margin-right: 15px;
            }
            .switch-item {
              background-color: black;
              width: 50px;
              text-align: center;
              cursor: pointer;
              &.active {
                background-color: red;
              }
            }
          }
        `}</style>
      </form>
    );
  }
}
