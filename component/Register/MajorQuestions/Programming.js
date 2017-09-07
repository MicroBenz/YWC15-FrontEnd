import React from 'react';
import styled from 'styled-components';

import TextArea from '../../Form/TextArea';
import questions from '../questions.json';

const { specialQuestions: { programming: programmingQuestion } } = questions;

const Programming = props => (
  <div>
    <TextArea error={props.error && !props.specialQuestions[0]} withLabel label={programmingQuestion[0]} value={props.specialQuestions[0]} field="specialQuestions[0]" large />
    <TextArea error={props.error && !props.specialQuestions[1]} withLabel label={programmingQuestion[1]} value={props.specialQuestions[1]} field="specialQuestions[1]" large />
    <TextArea error={props.error && !props.specialQuestions[2]} withLabel label={programmingQuestion[2]} value={props.specialQuestions[2]} field="specialQuestions[2]" large />
    <TextArea error={props.error && !props.specialQuestions[3]} withLabel label={programmingQuestion[3]} value={props.specialQuestions[3]} field="specialQuestions[3]" large />
  </div>
);

export default Programming;
