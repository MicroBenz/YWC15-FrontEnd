import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { actions as registerActions } from '../../store/reducers/register';
import GlowingButton from '../Core/GlowingButton';

const UploadButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 200px;
`;

const Input = styled.input.attrs({
  type: 'file',
  accept: 'image/*',
})`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  -webkit-appearance: none;
  cursor: pointer;
`;

@connect(
  () => ({}),
  { setField: registerActions.setField }
)
export default class ImageUploader extends Component {
  constructor(props) {
    super(props);
    this.handleUploadFile = this.handleUploadFile.bind(this);
  }

  /*  eslint-disable */
  getResizedImage(img) {
    let { width, height } = img;
    const MAX_WIDTH = 512;
    const MAX_HEIGHT = 512;
    if (width > height) {
      if (height > MAX_HEIGHT) {
        width *= MAX_HEIGHT / height;
        height = MAX_HEIGHT;
      }
    } else if (width > MAX_WIDTH) {
      height *= MAX_WIDTH / width;
      width = MAX_WIDTH;
    }
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = width;
    tempCanvas.height = height;
    const context = tempCanvas.getContext('2d');
    context.drawImage(img, 0, 0, width, height);
    return tempCanvas.toDataURL();
  }

  handleUploadFile(event) {
    const files = event.target.files;
    if (!files) {
      return;
    }
    const file = files[0];
    this.props.setField(this.props.field, file);
    if (this.props.previewField) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          this.props.setField(this.props.previewField, this.getResizedImage(img));
        };
      };
    }
  }
  /*  eslint-enable */  
  render() {
    return (
      <UploadButtonWrapper style={this.props.style}>
        <GlowingButton>{this.props.title}</GlowingButton>
        <Input onChange={this.handleUploadFile} />
      </UploadButtonWrapper>
    );
  }
}
