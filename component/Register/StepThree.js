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
  display: block;
  margin-bottom: 10px;
  @media(max-width: 768px) {
    margin-bottom: 15px;
  }
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
              checked={props.knowCampOther !== null}
              onChecked={(isCheck) => {
                if (!isCheck) {
                  props.setField('knowCampOther', null);
                } else {
                  props.setField('knowCampOther', '');
                }
              }}
              withText={props.knowCampOther !== null}
              text={props.knowCampOther}
              onChangeText={text => props.setField('knowCampOther', text)}
            />
          </div>
        </div>
      </div>
      <div className="column">
        <TextArea label="ความสามารถหรือกิจกรรมที่เคยทำ " field="activities" value={props.activities} large />
      </div>
    </div>
    <ActionContainer>
      <FormButton title="Back" left onClick={props.onBack} />
      <FormButton style={{ width: '140px' }} title="Save & Next" right onClick={props.onSubmit} />
    </ActionContainer>
  </form>
);

export default connect(
  null,
  { setField: registerActions.setField }
)(StepThree);
