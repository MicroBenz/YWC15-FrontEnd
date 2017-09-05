import React from 'react';
import styled from 'styled-components';

import TextArea from '../../Form/TextArea';
import FileUploader from '../../Form/FileUploader';
import questions from '../questions.json';

const { specialQuestions: { design: designQuestions } } = questions;

const Design = props => (
  <div>
    <TextArea withLabel label={designQuestions[0]} value={props.specialQuestions[0]} field="specialQuestions[0]" large />
    <TextArea withLabel label={designQuestions[1]} value={props.specialQuestions[1]} field="specialQuestions[1]" large />
    <FileUploader label={designQuestions[2]} value={props.specialQuestions[2]} field="specialQuestions[2]" large />
  </div>
);

export default Design;
