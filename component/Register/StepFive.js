import React from 'react';
import styled from 'styled-components';

import ActionContainer from '../Form/ActionContainer';
import FormButton from '../Form/FormButton';
import Programming from './MajorQuestions/Programming';
import Design from './MajorQuestions/Design';
import Content from './MajorQuestions/Content';
import Marketing from './MajorQuestions/Marketing';

const StepFive = props => (
  <form style={{ pointerEvents: 'auto' }}>
    {props.major === 'programming' && <Programming {...props} />}
    {props.major === 'design' && <Design {...props} />}
    {props.major === 'content' && <Content {...props} />}
    {props.major === 'marketing' && <Marketing {...props} />}
    <ActionContainer>
      <FormButton title="Back" left onClick={props.onBack} />
      <FormButton style={{ width: '140px' }} title="Save & Next" right onClick={props.onSubmit} />
    </ActionContainer>
  </form>
);

export default StepFive;
