import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { actions as registerActions } from '../../store/reducers/register';
import colors from '../../utils/colors';

const InputContainer = styled.div`
  margin-top: 40px;
`;

const FormLabel = styled.label`
  font-family: 'Cordia New';
  font-weight: 600;
  font-size: 22px;
  position: absolute;
  top: 9px;
  left: calc(0.625em - 1px);
  transition: transform .2s ease-out;
  cursor: text;
  pointer-events: none;
  ${props => props.active && `
    transform: translateY(-47px) scale(1);
  `}
`;

const Input = styled.input.attrs({
  className: 'input',
  type: 'text'
})`
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
    &+label {
      transform: translateY(-47px) scale(1);
    }
  }
  &::-webkit-input-placeholder {
    color: ${colors.white};
  }
  ${props => props.error && `
    border-color: ${colors.red};
    &:hover, &:focus {
      border-color: ${colors.red};
      box-shadow: 0 0 5px ${colors.red};
    }
  `}
`;

const ErrorLabel = styled.label`
  font-family: 'Cordia New';
  font-weight: 600;
  font-size: 20px;
  font-style: italic;
  color: ${colors.red};
`;

const FormInfo = styled.div`
  position: absolute;
  right: 5px;
  top: -32px;
  font-size: 20px;
  font-family: 'cordia new';
  font-style: italic;
`

const TextInput = ({ info, label, field, setField, value, errorValidation }) => (
  <InputContainer>
    <div className="control">
      <FormInfo>{info}</FormInfo>
      <Input
        value={value}
        onChange={e => setField(field, e.target.value)}
        error={errorValidation.indexOf(field) !== -1}
      />
      <FormLabel active={value !== ''}>{label}</FormLabel>
      {errorValidation.indexOf(field) !== -1 && <ErrorLabel>โปรดกรอกข้อมูลให้ครบถ้วน</ErrorLabel>}
    </div>
  </InputContainer>
);

export default connect(
  state => ({
    errorValidation: state.register.errorValidation
  }),
  { setField: registerActions.setField }
)(TextInput);