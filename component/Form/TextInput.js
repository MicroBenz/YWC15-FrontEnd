import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actions as registerActions } from '../../store/reducers/register';

const TextInput = ({ label, field, setField, value }) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <input
        className="input"
        type="text"
        value={value}
        onChange={e => setField(field, e.target.value)}
      />
    </div>
  </div>
);

TextInput.propTypes = {
  field: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  setField: PropTypes.func
};

export default connect(
  () => ({}),
  { setField: registerActions.setField }
)(TextInput);
