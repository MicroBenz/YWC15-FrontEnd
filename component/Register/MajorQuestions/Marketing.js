import React from 'react';
import styled from 'styled-components';

import TextArea from '../../Form/TextArea';
import questions from '../questions.json';

const { specialQuestions: { marketing: marketingQuestions } } = questions;

const Marketing = props => (
  <div>
    <TextArea withLabel label={marketingQuestions[0]} value={props.specialQuestions[0]} field="specialQuestions[0]" />
    <TextArea withLabel label={marketingQuestions[1]} value={props.specialQuestions[1]} field="specialQuestions[1]" />
    <TextArea withLabel label={marketingQuestions[2]} value={props.specialQuestions[2]} field="specialQuestions[2]" />
  </div>
);

export default Marketing;
