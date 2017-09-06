import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { actions as registerActions } from '../../store/reducers/register';
import colors from '../../utils/colors';

const InputContainer = styled.div`
  margin-top: 40px;
  ${props => props.withLabel && `
    margin-top: 0;
    .input {
      margin-top: 10px;
    }
  `}
`;

const TextArea = styled.textarea.attrs({
  className: 'input'
})`
  font-family: 'Cordia New';
  font-size: 22px;
  font-weight: 600;
  height: ${props => props.large ? '250px' : '120px'};
  color: ${colors.white};
  background-color: ${colors.formBg};
  border: 1px solid ${colors.formBg};
  border-radius: 0px;
  box-shadow: none;
  transition: all 0.30s ease-in-out;
  max-width: 100%;
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

const NormalLabel = styled.label`
  font-family: 'Cordia New';
  font-weight: 600;
  font-size: 22px;
`;

const ErrorLabel = NormalLabel.extend`
  color: ${colors.red};
`;

const TransformLabel = NormalLabel.extend`
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

const TextInput = ({ label, field, setField, value, withLabel = false, errorValidation, large, error = false }) => (
  <InputContainer withLabel={withLabel}>
    <div className="control">
      {withLabel && <NormalLabel>{label}</NormalLabel>}
      <TextArea
        error={(errorValidation.indexOf(field) !== -1 || error)}
        value={value}
        large={large}
        onChange={e => setField(field, e.target.value)}
      />
      {!withLabel && <TransformLabel active={value !== ''}>{label}</TransformLabel>}
      {(errorValidation.indexOf(field) !== -1 || error) && <ErrorLabel>โปรดกรอกข้อมูลให้ครบถ้วน</ErrorLabel>}
    </div>
  </InputContainer>
);

export default connect(
  state => ({
    errorValidation: state.register.errorValidation
  }),
  { setField: registerActions.setField }
)(TextInput);