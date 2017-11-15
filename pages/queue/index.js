import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import io from 'socket.io-client';
import config from '../../config';

import _FrameBox from '../../component/Core/FrameBox';

injectGlobal`
  body {
    font-family: 'Supermarket';
    min-height: 100vh;
  }
`;

const Container = styled.div`
  padding: 50px 0;
`;

const FrameBox = styled(_FrameBox)`
  margin: 0 auto;
  padding: 10px 0;
  @media(max-width: 768px) {
    width: 80%;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  @media(max-widyh: 768px) {
    font-size: 36px;
  }
`;

const MajorTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  @media(max-width: 768px) {
    font-size: 40px;
  }
`;

const MajorLogo = styled.img`
  display: block;
  margin: 0 auto;
`;

const CurrentQueue = styled.h3`
  text-align: center;
  font-size: 43px;
`;

const CampLogo = styled.img`
  width: 270px;
  display: block;
  margin: 0 auto;
  @media(max-width: 768px) {
    width: 250px;
  }
`;

const Columns = styled.div`
  margin-left: 0 !important;
  margin-right: 0 !important;
`;

const Column = styled.div`
  padding: 0 !important;
  @media(max-width: 768px) {
    margin: 20px 0;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 40px;
`;

export default class QueuePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      design: 'D--',
      programming: 'P--',
      marketing: 'M--',
      content: 'C--',
    };
  }

  componentDidMount() {
    const socket = io(config.apiPath, {
      path: '/socket.io',
      transports: ['websocket'],
      secure: true,
    });
    socket.on('connect', () => console.log('connect la'));
    socket.on('queue', (data) => {
      this.setState({
        design: `D${data.design}`,
        programming: `P${data.programming}`,
        marketing: `M${data.marketing}`,
        content: `C${data.content}`,
      });
    });
  }
  render() {
    const { programming, design, marketing, content } = this.state;
    return (
      <Container>
        <LogoContainer>
          <CampLogo src="/static/img/logo.png" />
          <Title>Good think take time :)</Title>
        </LogoContainer>
        <Columns className="columns">
          <Column className="column">
            <FrameBox>
              <MajorTitle>Content</MajorTitle>
              <MajorLogo src="/static/img/roles/content.png" />
              <CurrentQueue>{content}</CurrentQueue>
            </FrameBox>
          </Column>
          <Column className="column">
            <FrameBox>
              <MajorTitle>Design</MajorTitle>
              <MajorLogo src="/static/img/roles/design.png" />
              <CurrentQueue>{design}</CurrentQueue>
            </FrameBox>
          </Column>
          <Column className="column">
            <FrameBox>
              <MajorTitle>Marketing</MajorTitle>
              <MajorLogo src="/static/img/roles/marketing.png" />
              <CurrentQueue>{marketing}</CurrentQueue>
            </FrameBox>
          </Column>
          <Column className="column">
            <FrameBox>
              <MajorTitle>Programming</MajorTitle>
              <MajorLogo src="/static/img/roles/programming.png" />
              <CurrentQueue>{programming}</CurrentQueue>
            </FrameBox>
          </Column>
        </Columns>
      </Container>
    );
  }
}
