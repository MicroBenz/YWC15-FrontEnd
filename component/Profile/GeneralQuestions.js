import React from 'react';

import RowData from './RowData';
import RowTitle from './RowTitle';
import questions from '../../component/Register/questions.json';

const { generalQuestions } = questions;

const GeneralQuestions = props => (
  <div>
    <RowTitle>คำถามส่วนกลาง</RowTitle>
    <RowData title={generalQuestions[0]} value={props.generalQuestions[0]} newLine />
    <RowData title={generalQuestions[1]} value={props.generalQuestions[1]} newLine />
    <RowData title={generalQuestions[2]} value={props.generalQuestions[2]} newLine />
  </div>
);

export default GeneralQuestions;
