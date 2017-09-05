import React from 'react';
import moment from 'moment';

import RowData from './RowData';
import RowTitle from './RowTitle';

const PersonalInfo = props => (
  <div>
    <RowTitle>ข้อมูลส่วนตัว</RowTitle>
    <RowData title="ชื่อ-นามสกุล" value={`${props.title} ${props.firstName} ${props.lastName}`} />
    <RowData title="Name" value={`${props.firstNameEN} ${props.lastNameEN}`} />
    <RowData title="ชื่อเล่น" value={props.nickname} />
    <RowData title="วันเกิด" value={moment(props.birthdate).format('D MMMM YYYY')} />
    <RowData title="เพศ" value={props.sex} />
    <RowData title="กรุ๊ปเลือด" value={props.blood} />
    <RowData title="ศาสนา" value={props.religion} />
    <RowData title="สถานศึกษา" value={props.university} />
    <RowData title="คณะ/ภาควิชา" value={`${props.faculty} ${props.department}`} />
    <RowData title="ชั้นปี" value={props.academicYear} />
  </div>
);

export default PersonalInfo;
