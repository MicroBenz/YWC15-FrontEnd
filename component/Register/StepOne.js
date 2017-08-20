import React from 'react';
import PropTypes from 'prop-types';

import DatePicker from '../Form/DatePicker';
import TextInput from '../Form/TextInput';
import Dropdown from '../Form/Dropdown';
import FileUploader from '../Form/FileUploader';
import ImagePreview from './ImagePreview';
import { getImagePath } from '../../utils/helpers';
import dropdownData from './dropdown-data.json';

const StepOne = props => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      props.onSubmit();
    }}
    style={{ pointerEvents: 'auto' }}
  >
    <div className="columns">
      <div className="column is-one-third" style={{ textAlign: 'center' }}>
        <ImagePreview img={getImagePath(props.previewPicture)} />
        <FileUploader
          title="UPLOAD PROFILE"
          style={{ fontFamily: 'Agency FB', fontSize: '26px', marginTop: '15px' }}
          field="picture"
          previewField="previewPicture"
        />
        <div className="upload-description">
          <p>ขอเป็นรูปหน้าตรงแต่งกายตามสบาย</p>
          <p>(ขนาดไฟล์รูปไม่เกิน ...MB)</p>
        </div>
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
              label="มหาวิทยาลัย"
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
    
    <button>Next</button>
    <style jsx>{`
      .upload-description {
        font-family: 'Cordia New';
        font-weight: 600;
        font-size: 24px;
        margin-top: 15px;
      }
    `}</style>
  </form>
);

StepOne.propTypes = {
  title: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  firstNameEN: PropTypes.string,
  lastNameEN: PropTypes.string,
  nickname: PropTypes.string,
  birthdate: PropTypes.string,
  sex: PropTypes.string,
  blood: PropTypes.string,
  religion: PropTypes.string,
  university: PropTypes.string,
  academicYear: PropTypes.string,
  faculty: PropTypes.string,
  department: PropTypes.string
};

export default StepOne;
