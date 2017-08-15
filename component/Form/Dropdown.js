import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actions as registerActions } from '../../store/reducers/register';
import colors from '../../utils/colors';

const TextInput = ({ label, field, setField, value, items, style }) => (
  <div className="field" style={style}>
    <div className="control">
      <div className="select">
        <select className="ywc-select" defaultValue={label} value={value} onChange={e => setField(field, e.target.value)}>
          {items.map(item => <option key={item}>{item}</option>)}
        </select>
      </div>
    </div>
    <style jsx>{`
      .ywc-select {
        font-family: 'Cordia New';
        font-size: 22px;
        font-weight: 600;
        color: ${colors.white};
        background-color: ${colors.formBg};
        border: 1px solid ${colors.formBg};
        border-radius: 0px;
        box-shadow: none;
        transition: all 0.30s ease-in-out;
        &:hover {
          border: 1px solid ${colors.cyan};
          box-shadow: 0 0 5px ${colors.darkCyan};
        }
        &:focus {
          border: 1px solid ${colors.cyan};
          box-shadow: 0 0 5px ${colors.darkCyan};
        }
      }
      .select {
        &:after {
          width: 15px;
          height: 15px;
          border-width: 3px;
          border-color: ${colors.cyan};
          top: 55%;
        }
      }
    `}</style>
  </div>
);

TextInput.propTypes = {
  field: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  setField: PropTypes.func,
  items: PropTypes.array,
  style: PropTypes.object
};

export default connect(
  () => ({}),
  { setField: registerActions.setField }
)(TextInput);
