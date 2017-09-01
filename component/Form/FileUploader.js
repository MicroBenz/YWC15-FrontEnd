import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { actions as registerActions } from '../../store/reducers/register';
import colors from '../../utils/colors';

const Label = styled.label`
  font-family: 'Cordia New';
  font-size: 22px;
  font-weight: 600;
`;

const FileUploader = props => {
  let fileName = '';
  if (props.value && props.value.name) {
    fileName = props.value.name;
  } else if (props.value) {
    fileName = props.value;
  }
  return (
    <div>
      <Label>{props.label}</Label>
      <div className="file has-name">
        <label className="file-label">
          <input
            className="file-input"
            type="file"
            name="resume"
            onChange={e => props.setField(props.field, e.target.files[0])}
          />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fa fa-upload" />
            </span>
            <span className="file-label">
              อัพโหลดไฟล์
            </span>
          </span>
          <span className="file-name">
            {fileName}
          </span>
        </label>
      </div>
    </div>
  );
};

export default connect(
  null,
  { setField: registerActions.setField }
)(FileUploader);

