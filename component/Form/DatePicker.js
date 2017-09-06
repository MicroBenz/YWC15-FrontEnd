import React, { Component } from 'react';
import { connect } from 'react-redux';
import flatpickr from 'flatpickr';
import { th } from 'flatpickr/dist/l10n/th';
import moment from 'moment';
import styled, { injectGlobal } from 'styled-components';
import { lighten } from 'polished';

import { actions as registerActions } from '../../store/reducers/register';
import colors from '../../utils/colors';

/* eslint-disable */
injectGlobal`
  .flatpickr-calendar {
    background-color: ${colors.formBg} !important;
    border: 1px solid ${lighten(0.2, colors.formBg)} !important;
  }

  .flatpickr-mobile {
    font-family: 'Cordia New';
    font-size: 22px !important;
    font-weight: 600;
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
    &::-webkit-input-placeholder {
      color: ${colors.white} !important;
    }
  }
`;
/* eslint-enable */

const Container = styled.div.attrs({
  className: 'field'
})`
  margin-top: 40px;
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

const Label = styled.label`
  display: none;
  font-family: 'Cordia New';
  font-weight: 600;
  font-size: 22px;
  position: absolute;
  top: -9px;
  left: calc(0.625em - 1px);
  transition: transform .2s ease-out;
  transform: translateY(-30px) scale(1);
  cursor: text;
  pointer-events: none;
  ${props => props.active && 'display: block;'}
  @media(max-width: 768px) {
    display: block;
  }
`;

const ErrorLabel = styled.label`
  font-family: 'Cordia New';
  font-weight: 600;
  font-size: 20px;
  font-style: italic;
  color: ${colors.red};
`;

@connect(
  state => ({
    errorValidation: state.register.errorValidation
  }),
  { setField: registerActions.setField }
)
export default class DatePicker extends Component {
  componentDidMount() {
    flatpickr(`#${this.props.id}`, {
      locale: th,
      defaultDate: this.props.value || '01/01/1995',
      dateFormat: 'j F Y',
      onChange: (date) => {
        const dateStr = moment(date[0]).format('YYYY-MM-DD');
        this.props.setField(this.props.field, dateStr);
      }
    });
  }

  render() {
    const { label, value, errorValidation, field } = this.props;
    return (
      <Container>
        <div className="control">
          <Input id={this.props.id} placeholder={label} error={errorValidation.indexOf(field) !== -1} />
          <Label active={value !== ''}>{label}</Label>
          {errorValidation.indexOf(field) !== -1 && <ErrorLabel>โปรดกรอกข้อมูลให้ครบถ้วน</ErrorLabel>}
        </div>
      </Container>
    );
  }
}