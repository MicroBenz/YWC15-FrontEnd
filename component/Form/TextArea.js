import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actions as registerActions } from '../../store/reducers/register';
import colors from '../../utils/colors';

const TextInput = ({ label, field, setField, value }) => (
  <div className="field">
    <div className="control">
      <textarea
        className="input"
        value={value}
        onChange={e => setField(field, e.target.value)}
        placeholder={label}
      />
    </div>
    <style jsx>{`
      textarea {
        font-family: 'Cordia New';
        font-size: 22px;
        font-weight: 600;
        height: 120px;
        color: ${colors.white};
        background-color: ${colors.formBg};
        border: 1px solid ${colors.formBg};
        border-radius: 0px;
        box-shadow: none;
        transition: all 0.30s ease-in-out;
        resize: none;
        &:hover {
          border: 1px solid ${colors.cyan};
          box-shadow: 0 0 5px ${colors.darkCyan};
        }
        &:focus {
          border: 1px solid ${colors.cyan};
          box-shadow: 0 0 5px ${colors.darkCyan};
        }
        &::-webkit-input-placeholder {
          color: ${colors.white};
        }
      }
    `}</style>
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
