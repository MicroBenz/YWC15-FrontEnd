import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished'
import colors from '../../utils/colors';

const CheckboxLabel = styled.label`
  display: flex;
  font-family: 'Cordia New';
  font-weight: 600;
  font-size: 22px;
  &:hover {
    color: ${colors.white};
  }
  &:focus, &:active {
    outline: none;
  }
`;

const Input = styled.input`
  -webkit-appearance: none;
  background-color: ${colors.darkGray};
  border: 2px solid ${transparentize(0.2, colors.cyan)};
  box-shadow: 0 1px 2px ${colors.darkCyan};
  padding: 9px;
  border-radius: 3px;
  display: inline-block;
  position: relative;
  margin-right: 8px;
  width: 27px;
  height: 27px;
  &:checked:after {
    content: '\\2714';
    font-size: 14px;
    position: absolute;
    top: 2px;
    left: 7px;
    color: #ffffff;
  }
`;

const TextInput = styled.input.attrs({
  type: 'text',
  className: 'input'
})`
  cursor: text !important;
  height: 27px;
  font-family: 'Cordia New';
  font-size: 18px;
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
  &::-webkit-input-placeholder {
    color: ${colors.white};
  }
`;

const Checkbox = props => (
  <CheckboxLabel className="checkbox">
    <Input
      type="checkbox"
      checked={props.checked}
      onChange={e => props.onChecked(e.target.checked)}
    />
    <label style={props.withText ? { marginRight: 10 } : {}}>{props.label}</label>
    {props.withText && props.checked && <TextInput onChange={e => props.onChangeText(e.target.value)} value={props.text} />}
  </CheckboxLabel>
);

export default Checkbox;