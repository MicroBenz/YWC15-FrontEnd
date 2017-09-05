import React from 'react';
import { connect } from 'react-redux';

import ActionContainer from '../Form/ActionContainer';
import FormButton from '../Form/FormButton';
import Programming from './MajorQuestions/Programming';
import Design from './MajorQuestions/Design';
import Content from './MajorQuestions/Content';
import Marketing from './MajorQuestions/Marketing';

const isError = arr => arr.filter(item => item === 'answers').length > 0;

const StepFive = props => (
  <form style={{ pointerEvents: 'auto' }}>
    {props.major === 'programming' && <Programming {...props} error={isError(props.errorValidation)} />}
    {props.major === 'design' && <Design {...props} error={isError(props.errorValidation)} />}
    {props.major === 'content' && <Content {...props} error={isError(props.errorValidation)} />}
    {props.major === 'marketing' && <Marketing {...props} error={isError(props.errorValidation)} />}
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
)(StepFive);
