import React from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';

import { actions as appActions } from '../../store/reducers/app';
import FullScreenModal from '../../component/Core/FullScreenModal';
import { majorAsText } from '../../utils/helpers';
import colors from '../../utils/colors';
import content from '../../component/Landing/content.json';

const showing = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  position: relative;
  padding: 25px 0;
  animation: ${showing} .8s;
`;

const MajorName = styled.h2`
  font-size: 36px;
  font-weight: 600;
  margin-top: -15px;
  color: ${colors.cyan};
`;

const MajorDetail = styled.h3`
  font-size: 23px;
  width: 80%;
  margin: 0 auto;
`;

const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 10px;
  i {
    font-size: 47px;
    color: ${colors.darkCyan};
  }
`;

const MajorModal = props => (
  <FullScreenModal>
    <Container>
      <img src={`/static/img/roles/${props.major}.png`} alt={props.major} />
      <MajorName>{majorAsText(props.major)}</MajorName>
      <MajorDetail>{content.major[props.major].description}</MajorDetail>
      <CloseButton onClick={props.hideModal}><i className="fa fa-times" /></CloseButton>
    </Container>
  </FullScreenModal>
);

export default connect(
  null,
  { ...appActions }
)(MajorModal);
