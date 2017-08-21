import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';

const ButtonContainer = styled.div`
  position: relative;
  padding: 8px 0px;
  background-color: #345e62;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.5s ease-out;
  text-align: center;
  width: 100px;
  margin: 0 10px;
  &:hover {
    background-color: #253b43;
  }
  &:before {
    display: block;
    content: "";
    width: 10px;
    height: 10px;
    top: -2px;
    left: -2px;
    position: absolute;
    border-top: 4px solid ${colors.cyan};
    border-left: 4px solid ${colors.cyan};
  }
  &:after {
    display: block;
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    top: -2px;
    right: -2px;
    border-top: 4px solid ${colors.cyan};
    border-right: 4px solid ${colors.cyan};
  }
  span {
    text-align: center;
    &:before {
      display: block;
      content: "";
      width: 10px;
      height: 10px;
      position: absolute;
      bottom: -2px;
      left: -2px;
      border-bottom: 4px solid ${colors.cyan};
      border-left: 4px solid ${colors.cyan};
    }
    &:after {
      display: block;
      content: "";
      width: 10px;
      height: 10px;
      position: absolute;
      bottom: -2px;
      right: -2px;
      border-bottom: 4px solid ${colors.cyan};
      border-right: 4px solid ${colors.cyan};
    }
    i {
      &.fa {
        display: inline;
      }
      &.fa-chevron-left {
        margin-right: 5px;
      }
      &.fa-chevron-right {
        margin-left: 5px;
      }
    }
  }
`;

const FormButton = props => (
  <ButtonContainer {...props}>
    <span>{props.left && <i className="fa fa-chevron-left" />}{props.title}{props.right && <i className="fa fa-chevron-right" />}</span>
  </ButtonContainer>
);

export default FormButton;
