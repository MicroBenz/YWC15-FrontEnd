import React from 'react';
import styled from 'styled-components';

import DatePicker from '../Form/DatePicker';
import TextInput from '../Form/TextInput';
import Dropdown from '../Form/Dropdown';
import ImageUploader from '../Form/ImageUploader';
import FormButton from '../Form/FormButton';
import ActionContainer from '../Form/ActionContainer';
import ImagePreview from './ImagePreview';
import { getImagePath } from '../../utils/helpers';
import dropdownData from './dropdown-data.json';

const UploadDescriptionContainer = styled.div`
  font-family: 'Cordia New';
  font-weight: 600;
  font-size: 24px;
  margin-top: 15px;
`;

const StepOne = props => (
  <form style={{ pointerEvents: 'auto' }}>
    <div className="columns">
      <div className="column is-one-third" style={{ textAlign: 'center' }}>
        <ImagePreview img={getImagePath(props.previewPicture)} />
        <ImageUploader
          title="UPLOAD PROFILE"
          style={{ fontFamily: 'Agency FB', fontSize: '26px', marginTop: '15px' }}
          field="picture"
          previewField="previewPicture"
        />
        <UploadDescriptionContainer>
          <p>ขอเป็นรูปหน้าตรงแต่งกายตามสบาย</p>
          <p style={{ fontSize: '20px' }}>(ขนาดไฟล์รูปไม่เกิน 2MB)</p>
        </UploadDescriptionContainer>
      </div>
      <div className="column">
        <div className="columns">
          <div className="column">
            <Dropdown
              field="title"
              label="คำนำหน้าชื่อ"
              value={props.title}
              items={['นาย', 'นางสาว']}
            />
          </div>
          <div className="column">
            <TextInput field="firstName" label="ชื่อ" value={props.firstName} />
          </div>
          <div className="column">
            <TextInput field="lastName" label="นามสกุล" value={props.lastName} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-offset-4">
            <TextInput field="firstNameEN" label="ชื่อ (ภาษาอังกฤษ)" value={props.firstNameEN} />
          </div>
          <div className="column">
            <TextInput field="lastNameEN" label="นามสกุล (ภาษาอังกฤษ)" value={props.lastNameEN} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-offset-4">
            <TextInput field="nickname" label="ชื่อเล่น" value={props.nickname} />
          </div>
          <div className="column">
            <DatePicker id="birthdate" field="birthdate" label="วันเกิด" value={props.birthdate} />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Dropdown
              field="sex"
              label="เพศ"
              value={props.sex}
              items={dropdownData.sex}
            />
          </div>
          <div className="column">
            <Dropdown
              field="blood"
              label="กรุ๊ปเลือด"
              value={props.blood}
              items={dropdownData.blood}
            />
          </div>
          <div className="column">
            <Dropdown
              field="religion"
              label="ศาสนา"
              value={props.religion}
              items={dropdownData.religion}
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <TextInput
              field="university"
              label="สถานศึกษา"
              value={props.university}
            />
          </div>
          <div className="column">
            <Dropdown
              field="academicYear"
              label="ชั้นปี"
              value={props.academicYear}
              items={dropdownData.academicYear}
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <TextInput field="faculty" label="คณะ" value={props.faculty} />
          </div>
          <div className="column">
            <TextInput field="department" label="สาขา" value={props.department} />
          </div>
        </div>
      </div>
    </div>
    <ActionContainer>
      <FormButton style={{ width: '140px' }} title="Save & Next" right onClick={() => props.onSubmit()} />
    </ActionContainer>
  </form>
);

export default StepOne;