import React from 'react';
import { connect } from 'react-redux';

import TextArea from '../Form/TextArea';
import ActionContainer from '../Form/ActionContainer';
import FormButton from '../Form/FormButton';
import questions from './questions.json';

const { generalQuestions } = questions;

const isError = arr => arr.filter(item => item === 'answers').length > 0;

const StepFour = props => (
  <form style={{ pointerEvents: 'auto' }}>
    <TextArea error={isError(props.errorValidation) && !props.generalQuestions[0]} withLabel label={generalQuestions[0]} value={props.generalQuestions[0]} field="generalQuestions[0]" large />
    <TextArea error={isError(props.errorValidation) && !props.generalQuestions[1]} withLabel label={generalQuestions[1]} value={props.generalQuestions[1]} field="generalQuestions[1]" large />
    <TextArea error={isError(props.errorValidation) && !props.generalQuestions[2]} withLabel label={generalQuestions[2]} value={props.generalQuestions[2]} field="generalQuestions[2]" large />
    <ActionContainer>
      <FormButton title="Back" left onClick={props.onBack} />
      <FormButton style={{ width: '140px' }} title="Save & Next" right onClick={props.onSubmit} />
    </ActionContainer>
  </form>
);

export default connect(
  state => ({
    errorValidation: state.register.errorValidation
  })
)(StepFour);
