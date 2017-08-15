import React from 'react';

import DatePicker from '../Form/DatePicker';
import TextInput from '../Form/TextInput';
import Dropdown from '../Form/Dropdown';

const StepOne = props => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      props.onSubmit();
    }}
    style={{ pointerEvents: 'auto' }}
  >
    <div className="columns">
      <div className="column is-one-third">
        <h1>Hi</h1>
      </div>
      <div className="column">
        <div className="columns">
          <div className="column">
            <Dropdown field="title" label="คำนำหน้าชื่อ" value={props.title} items={['นาย', 'นางสาว']} style={{ paddingBottom: '10px' }} />
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
            <Dropdown field="sex" label="เพศ" value={props.sex} items={['ชาย', 'หญิง']} />
          </div>
          <div className="column">
            <Dropdown field="blood" label="ชื่อเล่น" value={props.blood} items={['A', 'B', 'O', 'AB']} />
          </div>
          <div className="column">
            <Dropdown field="religion" label="ศาสนา" value={props.religion} items={['พุทธ', 'คริสต์']} />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Dropdown field="university" label="มหาวิทยาลัย" value={props.university} items={['จุฬาลงกรณ์มหาวิทยาลัย']} />
          </div>
          <div className="column">
            <Dropdown field="academicYear" label="ชั้นปี" value={props.academicYear} items={['ปี 1', 'ปี 2', 'ปี 3', 'ปี 4', 'ปี 5', 'ปี 6', 'ปวส. ปี 1', 'ปวส. ปี 2']} />
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
  </form>
);

export default StepOne;
