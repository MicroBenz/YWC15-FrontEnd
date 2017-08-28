import React from 'react';

import RowData from './RowData';
import RowTitle from './RowTitle';
import questions from '../../component/Register/questions.json';
import { majorAsText } from '../../utils/helpers';

const { specialQuestions } = questions;

const MajorQuestions = props => (
  <div>
    <RowTitle>คำถามสาขา {majorAsText(props.major)}</RowTitle>
    <RowData title={specialQuestions[props.major][0]} value={props.specialQuestions[0]} newLine />
    <RowData title={specialQuestions[props.major][1]} value={props.specialQuestions[0]} newLine />
    <RowData title={specialQuestions[props.major][2]} value={props.specialQuestions[0]} newLine />
  </div>
);

export default MajorQuestions;
