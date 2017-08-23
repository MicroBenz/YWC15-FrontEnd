import React from 'react';
import { connect } from 'react-redux';
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

const StepThree = props => (
  <form style={{ pointerEvents: 'auto' }}>
    <div className="columns">
      <div className="column">
        <label>รู้จักค่ายทางไหน</label>
        <Checkbox
          label="Facebook"
          checked={isCheckWithArr(props.knowCamp, 'Facebook')}
          onChecked={isCheck => props.setField('knowCamp', createNewKnowCamp(props.knowCamp, 'Facebook', isCheck))}
        />
        <Checkbox
          label="Twitter"
          checked={isCheckWithArr(props.knowCamp, 'Twitter')}
          onChecked={isCheck => props.setField('knowCamp', createNewKnowCamp(props.knowCamp, 'Twitter', isCheck))}
        />
        <Checkbox
          label="Roadshow"
          checked={isCheckWithArr(props.knowCamp, 'Roadshow')}
          onChecked={isCheck => props.setField('knowCamp', createNewKnowCamp(props.knowCamp, 'Roadshow', isCheck))}
        />
        <Checkbox
          label="คนรู้จัก"
          checked={isCheckWithArr(props.knowCamp, 'คนรู้จัก')}
          onChecked={isCheck => props.setField('knowCamp', createNewKnowCamp(props.knowCamp, 'คนรู้จัก', isCheck))}
        />
        <Checkbox
          label="Email"
          checked={isCheckWithArr(props.knowCamp, 'Email')}
          onChecked={isCheck => props.setField('knowCamp', createNewKnowCamp(props.knowCamp, 'Email', isCheck))}
        />
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
