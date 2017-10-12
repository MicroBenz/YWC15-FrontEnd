import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { actions as appActions } from '../../store/reducers/app';
import SectionHeader from './SectionHeader';
import RegisterMajor from './RegisterMajor';

const Container = styled.div.attrs({
  className: 'container'
})`
  @media(max-width: 768px) {
    padding: 0 5%;
  }
`;

const Register = ({ registerStat, isShowSeeMore, showModal, hideModal, isDone }) => (
  <div>
    <SectionHeader title="Register" subtitle="สมัครค่าย" />
    <Container>
      <div className="columns">
        <div className="column">
          <RegisterMajor
            major="content"
            count={registerStat.content}
            onClickSeeMore={() => {
              if (!isShowSeeMore) {
                showModal('content');
              } else {
                hideModal();
              }
            }}
            isDone={isDone}
          />
        </div>
        <div className="column">
          <RegisterMajor
            major="design"
            count={registerStat.design}
            onClickSeeMore={() => {
              if (!isShowSeeMore) {
                showModal('design');
              } else {
                hideModal();
              }
            }}
            isDone={isDone}
          />
        </div>
        <div className="column">
          <RegisterMajor
            major="marketing"
            count={registerStat.marketing}
            onClickSeeMore={() => {
              if (!isShowSeeMore) {
                showModal('marketing');
              } else {
                hideModal();
              }
            }}
            isDone={isDone}
          />
        </div>
        <div className="column">
          <RegisterMajor
            major="programming"
            count={registerStat.programming}
            onClickSeeMore={() => {
              if (!isShowSeeMore) {
                showModal('programming');
              } else {
                hideModal();
              }
            }}
            isDone={isDone}
          />
        </div>
      </div>
    </Container>
  </div>
);

export default connect(
  state => ({
    registerStat: state.app.registerStat,
    isShowSeeMore: state.app.isShowSeeMore,
    isDone: state.register.status !== 'in progress'
  }),
  { ...appActions }
)(Register);
