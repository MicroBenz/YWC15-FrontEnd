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
      />
      <label className={value !== '' ? 'active' : ''}>{label}</label>
    </div>
    <style jsx>{`
      .field {
        margin-top: 40px;
      }
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
          &+label {
            transform: translateY(-47px) scale(1);
          }
        }
        &::-webkit-input-placeholder {
          color: ${colors.white};
        }
      }
      label {
        font-family: 'Cordia New';
        font-weight: 600;
        font-size: 22px;
        position: absolute;
        top: 9px;
        left: calc(0.625em - 1px);
        transition: transform .2s ease-out;
        cursor: text;
        pointer-events: none;
        &.active {
          transform: translateY(-47px) scale(1);
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
