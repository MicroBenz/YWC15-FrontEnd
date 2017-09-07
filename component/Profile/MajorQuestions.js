import React from 'react';
import styled from 'styled-components';

import RowData from './RowData';
import RowTitle from './RowTitle';
import questions from '../../component/Register/questions.json';
import { majorAsText } from '../../utils/helpers';
import config from '../../config';
import colors from '../../utils/colors';

const { specialQuestions } = questions;

const P = styled.p`
  font-size: 20px;
`;

const A = styled.a`
  color: ${colors.cyan};
  &:hover {
    color: ${colors.darkCyan};
  }
`;

const MajorQuestions = props => (
  <div>
    <RowTitle>คำถามสาขา {majorAsText(props.major)}</RowTitle>
    <RowData title={specialQuestions[props.major][0]} value={props.specialQuestions[0]} newLine />
    <RowData title={specialQuestions[props.major][1]} value={props.specialQuestions[1]} newLine />
    <RowData title={specialQuestions[props.major][2]} value={props.specialQuestions[2]} newLine />
    {props.major === 'programming' && (
      <RowData title={specialQuestions[props.major][3]} value={props.specialQuestions[3]} newLine />
    )}
    {props.major === 'design' && (
      <div>
        <P><b>{specialQuestions[props.major][3]}</b></P>
        <A target="_blank" href={`${config.baseURL}/api/${props.designPortfolio}`}>คลิกเพื่อเปิดไฟล์</A>
      </div>
    )}
  </div>
);

export default MajorQuestions;
