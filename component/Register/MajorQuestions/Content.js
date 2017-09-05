import React from 'react';
import styled from 'styled-components';

import TextArea from '../../Form/TextArea';
import questions from '../questions.json';

const { specialQuestions: { content: contentQuestions } } = questions;

const Content = props => (
  <div>
    <TextArea error={props.error && !props.specialQuestions[0]} withLabel label={contentQuestions[0]} value={props.specialQuestions[0]} field="specialQuestions[0]" large />
    <TextArea error={props.error && !props.specialQuestions[1]} withLabel label={contentQuestions[1]} value={props.specialQuestions[1]} field="specialQuestions[1]" large />
    <TextArea error={props.error && !props.specialQuestions[2]} withLabel label={contentQuestions[2]} value={props.specialQuestions[2]} field="specialQuestions[2]" large />
  </div>
);

export default Content;
