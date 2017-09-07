import React from 'react';

import RowData from './RowData';
import RowTitle from './RowTitle';

const Activities = props => (
  <div>
    <RowTitle>กิจกรรมที่เคยทำ</RowTitle>
    <RowData title="ความสามารถหรือกิจกรรมที่เคยทำ" value={props.activities} newLine />
  </div>
);

export default Activities;
