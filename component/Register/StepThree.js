import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import _ from 'lodash';

import { actions as registerActions } from '../../store/reducers/register';
import TextArea from '../Form/TextArea';
import ActionContainer from '../Form/ActionContainer';
import FormButton from '../Form/FormButton';
import Checkbox from '../Form/Checkbox';

const isCheckWithArr = (arr, label) => arr.indexOf(label) !== -1;

const createNewKnowCamp = (prev, value, add) => {
  if (add) {
    return [...prev, value];
  }
  return _.remove(prev, item => item !== value);
};

const Label = styled.label`
  font-family: 'Cordia New';
  font-size: 22px;
  font-weight: 600;
`;

const StepThree = props => (
  <form style={{ pointerEvents: 'auto' }}>
    <div className="columns">
      <div className="column">
        <Label>รู้จักค่ายทางไหน</Label>
        <div className="columns">
          <div className="column">
            <Checkbox
              label="Facebook"
              checked={isCheckWithArr(props.knowCamp, 'Facebook')}
              onChecked={isCheck => props.setField('knowCamp', createNewKnowCamp(props.knowCamp, 'Facebook', isCheck))}
            />
          </div>
          <div className="column">
            <Checkbox
              label="Twitter"
              checked={isCheckWithArr(props.knowCamp, 'Twitter')}
              onChecked={isCheck => props.setField('knowCamp', createNewKnowCamp(props.knowCamp, 'Twitter', isCheck))}
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Checkbox
              label="Roadshow"
              checked={isCheckWithArr(props.knowCamp, 'Roadshow')}
              onChecked={isCheck => props.setField('knowCamp', createNewKnowCamp(props.knowCamp, 'Roadshow', isCheck))}
            />
          </div>
          <div className="column">
            <Checkbox
              label="คนรู้จัก"
              checked={isCheckWithArr(props.knowCamp, 'คนรู้จัก')}
              onChecked={isCheck => props.setField('knowCamp', createNewKnowCamp(props.knowCamp, 'คนรู้จัก', isCheck))}
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Checkbox
              label="Email"
              checked={isCheckWithArr(props.knowCamp, 'Email')}
              onChecked={isCheck => props.setField('knowCamp', createNewKnowCamp(props.knowCamp, 'Email', isCheck))}
            />
          </div>
          <div className="column">
            <Checkbox
              label="อื่นๆ"
              checked={isCheckWithArr(props.knowCamp, 'Email')}
              onChecked={isCheck => props.setField('knowCamp', createNewKnowCamp(props.knowCamp, 'Email', isCheck))}
            />
          </div>
        </div>
      </div>
      <div className="column">
        <TextArea label="ความสามารถหรือกิจกรรมที่เคยทำ " field="activities" value={props.activities} />
      </div>
    </div>
    <ActionContainer>
      <FormButton title="Back" left onClick={props.onBack} />
      <FormButton title="Next" right onClick={props.onSubmit} />
    </ActionContainer>
  </form>
);

export default connect(
  null,
  { setField: registerActions.setField }
)(StepThree);
