import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { actions as registerActions } from '../../store/reducers/register';
import colors from '../../utils/colors';
import config from '../../config';

const Label = styled.label`
  font-family: 'Cordia New';
  font-size: 22px;
  font-weight: 600;
`;

const P = styled.p`
  font-family: 'Cordia New';
  font-weight: 600;  
  font-size: 20px;
`;

const A = styled.a`
  color: ${colors.cyan};
  &:hover {
    color: ${colors.darkCyan};
  }
`;

const FileUploader = (props) => {
  let fileName = '';
  if (props.value && props.value.name) {
    fileName = props.value.name;
  } else if (props.value) {
    fileName = props.value;
  }
  return (
    <div>
      <Label>{props.label}</Label>
      {props.uploadedFile && <P>น้องเคยอัพโหลดไฟล์แล้ว <A target="_blank" href={`${config.baseURL}/api/${props.uploadedFile}`}>คลิกเพื่อตรวจสอบไฟล์</A></P>}
      <div className="file has-name">
        <label className="file-label">
          <input
            className="file-input"
            type="file"
            name="resume"
            accept="application/pdf"
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
  state => ({
    uploadedFile: state.register.designPortfolio
  }),
  { setField: registerActions.setField }
)(FileUploader);

