import React from 'react';
import Router from 'next/router';
import styled, { injectGlobal } from 'styled-components';

import connect from '../../store/connect';
import Avatar from '../../component/Profile/Avatar';
import Personalnfo from '../../component/Profile/Personalnfo';
import Contact from '../../component/Profile/Contact';
import Activities from '../../component/Profile/Activities';
import GeneralQuestions from '../../component/Profile/GeneralQuestions';
import MajorQuestions from '../../component/Profile/MajorQuestions';
import GlowingButton from '../../component/Core/GlowingButton';

/* eslint-disable */
injectGlobal`
body {
  height: 100vh !important;
  overflow-y: scroll;
}
`;
/* eslint-enable */

const Container = styled.div.attrs({
  className: 'container'
})`
  padding: 50px 0;
`;

const PaddingContainer = styled.div`
  padding-top: 20px;
  @media(max-width: 768px) {
    padding: 0 20px;
    padding-top: 20px;
  }
`;

const GoHomeButton = styled(GlowingButton)`
  width: 150px;
  text-align: center;
  margin: 0 auto;
  margin-top: 10px;
`;

const CompletedRegistration = props => (
  <Container>
    <Avatar {...props.registerData} />
    <PaddingContainer className="columns">
      <div className="column">
        <Personalnfo {...props.registerData} />
      </div>
      <div className="column">
        <Contact {...props.registerData} />
      </div>
    </PaddingContainer>
    <PaddingContainer>
      <Activities {...props.registerData} />
    </PaddingContainer>
    <PaddingContainer>
      <GeneralQuestions {...props.registerData} />
    </PaddingContainer>
    <PaddingContainer>
      <MajorQuestions {...props.registerData} />
    </PaddingContainer>
    <GoHomeButton onClick={() => Router.push('/landing', '/')}>กลับสู่หน้าแรก</GoHomeButton>
  </Container>
);

export default connect(
  state => ({
    registerData: state.register
  })
)(CompletedRegistration);
