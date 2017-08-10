import React from 'react';

import TextInput from '../Form/TextInput';
import Dropdown from '../Form/Dropdown';

const StepOne = (props) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      props.onSubmit();
    }}
  >
    <Dropdown field="title" label="คำนำหน้าชื่อ" value={props.title} items={['นาย', 'นางสาว']} />
    <div className="columns">
      <div className="column">
        <TextInput field="firstName" label="ชื่อ" value={props.firstName} />
      </div>
      <div className="column">
        <TextInput field="lastName" label="นามสกุล" value={props.lastName} />
      </div>
    </div>
  </form>
);

export default StepOne;
