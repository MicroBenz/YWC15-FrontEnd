import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { actions as registerActions } from '../../store/reducers/register';
import colors from '../../utils/colors';

const InputContainer = styled.div`
  margin-top: 40px;
`;

const NormalLabel = styled.label`
  font-family: 'Cordia New';
  font-weight: 600;
  font-size: 22px;
`;

const FormLabel = NormalLabel.extend`
  display: none;
  position: absolute;
  top: -9px;
  left: calc(0.625em - 1px);
  transition: transform .2s ease-out;
  transform: translateY(-30px) scale(1);
  cursor: text;
  pointer-events: none;
  ${props => props.active && `
    display: block;  
  `}
`;

const ErrorLabel = NormalLabel.extend`
  color: ${colors.red};
`;

const SelectContainer = styled.div.attrs({
  className: 'select'
})`
  width: 100%;
  height: 100% !important;
  select {
    width: 100%;
  }
  &:after {
    width: 15px !important;
    height: 15px !important;
    border-width: 3px !important;
    border-color: ${colors.cyan} !important;
    top: 40% !important;
  }
`;

const Select = styled.select`
  font-family: 'Cordia New' !important;
  font-size: 22px !important;
  font-weight: 600 !important;
  color: ${colors.white} !important;
  background-color: ${colors.formBg} !important;
  border: 1px solid ${colors.formBg} !important;
  border-radius: 0px !important;
  box-shadow: none !important;
  transition: all 0.30s ease-in-out !important;
  &:hover {
    border: 1px solid ${colors.cyan} !important;
    box-shadow: 0 0 5px ${colors.darkCyan} !important;
  }
  &:focus {
    border: 1px solid ${colors.cyan} !important;
    box-shadow: 0 0 5px ${colors.darkCyan} !important;
  }
  ${props => props.error && `
    border-color: ${colors.red} !important;
    &:hover, &:focus {
      border-color: ${colors.red} !important;
      box-shadow: 0 0 5px ${colors.red} !important;
    }
  `}
`;

const Dropdown = ({ label, field, setField, value, items, style, errorValidation }) => (
  <InputContainer style={style}>
    <div className="control">
      <SelectContainer>
        <Select
          error={errorValidation.indexOf(field) !== -1}
          defaultValue={label}
          value={value}
          onChange={e => setField(field, e.target.value)}
        >
          <option value="" disabled>{label}</option>
          {items.map(item => <option key={item} value={item}>{item}</option>)}
        </Select>
      </SelectContainer>
      <FormLabel active={value !== ''}>{label}</FormLabel>
    </div>
    {errorValidation.indexOf(field) !== -1 && <ErrorLabel>โปรดกรอกข้อมูลให้ครบถ้วน</ErrorLabel>}
  </InputContainer>
);

export default connect(
  state => ({
    errorValidation: state.register.errorValidation
  }),
  { setField: registerActions.setField }
)(Dropdown);
