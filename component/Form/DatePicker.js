import React, { Component } from 'react';
import { connect } from 'react-redux';
import flatpickr from 'flatpickr';
import { th } from 'flatpickr/dist/l10n/th';
import moment from 'moment';
import PropTypes from 'prop-types';

import { actions as registerActions } from '../../store/reducers/register';
import colors from '../../utils/colors';

@connect(
  () => ({}),
  { setField: registerActions.setField }
)
export default class DatePicker extends Component {
  static propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    field: PropTypes.string,
    label: PropTypes.string,
    setField: PropTypes.func
  };

  componentDidMount() {
    flatpickr(`#${this.props.id}`, {
      locale: th,
      defaultDate: this.props.value,
      dateFormat: 'j F Y',
      onChange: (date) => {
        const dateStr = moment(date[0]).format('YYYY-MM-DD');
        this.props.setField(this.props.field, dateStr);
      }
    });
  }

  render() {
    const { label } = this.props;
    return (
      <div className="field">
        <div className="control">
          <input
            className="input"
            id={this.props.id}
            type="text"
            placeholder={label}
          />
        </div>
        <style jsx>{`
          input {
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
          }
        `}</style>
      </div>
    );
  }
}
