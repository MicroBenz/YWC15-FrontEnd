import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actions as registerActions } from '../../store/reducers/register';

const TextInput = ({ label, field, setField, value, items }) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <div className="select">
        <select value={value} onChange={e => setField(field, e.target.value)}>
          {items.map(item => <option key={item}>{item}</option>)}
        </select>
      </div>
    </div>
  </div>
);

TextInput.propTypes = {
  field: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  setField: PropTypes.func,
  items: PropTypes.array,
};

export default connect(
  () => ({}),
  { setField: registerActions.setField }
)(TextInput);
