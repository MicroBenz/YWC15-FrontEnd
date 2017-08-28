import React from 'react';

import RowData from './RowData';
import RowTitle from './RowTitle';

const Contact = props => (
  <div>
    <RowTitle>ข้อมูลการติดต่อ</RowTitle>
    <RowData title="ที่อยู่" value={props.address} />
    <RowData title="จังหวัด" value={props.province} />
    <RowData title="รหัสไปรษณีย์" value={props.postalCode} />
    <RowData title="อีเมล" value={props.email} />
    <RowData title="เบอร์โทรศัพท์" value={props.phone} />
    <RowData title="เบอร์ติดต่อฉุกเฉิน" value={`${props.emergencyPhone} (${props.emergencyPhoneRelated})`} />
    <RowData title="ขนาดเสื้อ" value={props.shirtSize} />
    <RowData title="อาหารที่รับประทาน" value={props.food} />
    {(props.disease !== '' || props.med !== '' || props.medAllergy !== '') && (
      <div>
        <RowData title="โรคประจำตัว" value={props.disease} />
        <RowData title="ยาที่ใช้ประจำ" value={props.med} />
        <RowData title="ยาที่แพ้" value={props.medAllergy} />
      </div>
    )}
    <RowData title="Skype ID" value={props.skype} />
  </div>
);

export default Contact;
