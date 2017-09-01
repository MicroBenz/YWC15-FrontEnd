import React from 'react';
import styled from 'styled-components';

import TextArea from '../../Form/TextArea';
import questions from '../questions.json';

const { specialQuestions: { programming: programmingQuestion } } = questions;

const Programming = props => (
  <div>
    <TextArea withLabel label={programmingQuestion[0]} value={props.specialQuestions[0]} field="specialQuestions[0]" />
    <TextArea withLabel label={programmingQuestion[1]} value={props.specialQuestions[1]} field="specialQuestions[1]" />
    <TextArea withLabel label={programmingQuestion[2]} value={props.specialQuestions[2]} field="specialQuestions[2]" />
  </div>
);

export default Programming;
