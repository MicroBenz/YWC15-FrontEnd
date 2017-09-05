import React from 'react';

import TextArea from '../Form/TextArea';
import ActionContainer from '../Form/ActionContainer';
import FormButton from '../Form/FormButton';
import questions from './questions.json';

const { generalQuestions } = questions;

const StepFour = props => (
  <form style={{ pointerEvents: 'auto' }}>
    <TextArea withLabel label={generalQuestions[0]} value={props.generalQuestions[0]} field="generalQuestions[0]" large />
    <TextArea withLabel label={generalQuestions[1]} value={props.generalQuestions[1]} field="generalQuestions[1]" large />
    <TextArea withLabel label={generalQuestions[2]} value={props.generalQuestions[2]} field="generalQuestions[2]" large />
    <ActionContainer>
      <FormButton title="Back" left onClick={props.onBack} />
      <FormButton style={{ width: '140px' }} title="Save & Next" right onClick={props.onSubmit} />
    </ActionContainer>
  </form>
);

export default StepFour;
