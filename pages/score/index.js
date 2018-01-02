import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import io from 'socket.io-client';
import { rgba } from 'polished';

import connect from '../../store/connect';
import { actions as appActions } from '../../store/reducers/app';
import config from '../../config';
import colors from '../../utils/colors';

/* eslint-disable */
injectGlobal`
  @font-face {
    font-family: 'supermarket';
    src: local('supermarket'),
      url('static/fonts/supermarket.ttf') format('ttf');
  }

  body {
    font-family: 'Supermarket';
    letter-spacing: .02em;
    -webkit-font-smoothing: antialiased;
    margin: 0 !important;
    padding: 0 !important;
    overflow-y: hidden !important;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: .024681em;
  }
`;
/* eslint-enable */

const LogoImage = styled.img.attrs({
  src: '/static/img/logo.png',
  alt: 'logo'
})`
  width: 250px;
  display: block;
  margin: 0 auto;
`;


const Container = styled.div`
  border: 1px solid ${colors.cyan};
  /* padding: 18px 15px; */
  position: relative;
  text-align: center;
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
`;

const InnerContainer = styled.div`
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
`;

const ListCol = styled.div`
  flex: 1;
`;

const ListRow = styled.div`
  margin: 0;
  padding: 14px 0 8px;
  border-top: 1px solid rgba(102, 252, 241, 0.7);
  transition: all .2s;
  font-size: 38px;
  ${props => props.isHeader && `
    background-color: ${rgba(colors.darkCyan2, 0.4)};
    ${ListCol} {
      font-weight: bold;
    }
  `}
  display: flex;
`;

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: []
    };
  }

  componentDidMount() {
    const socket = io(config.apiPath, {
      path: '/socket.io',
      transports: ['websocket'],
      secure: true,
    });
    socket.on('score', (data) => {
      this.setState({ scores: data });
    });
  }

  render() {
    let { scores } = this.state;
    scores = scores.sort((a, b) => {
      if (a.score > b.score) return -1;
      else if (a.score === b.score) return 0;
      return 1;
    });
    return (
      <div className="container">
        <LogoImage />
        <div className="columns">
          <div className="column is-half">
            <Container>
              <InnerContainer>
                <ListRow isHeader>
                  <ListCol>Rank</ListCol>
                  <ListCol>Team</ListCol>
                  <ListCol>Score</ListCol>
                </ListRow>
                {scores.slice(0, 5).map((score, idx) => (
                  <ListRow key={score.group}>
                    <ListCol>{idx + 1}</ListCol>
                    <ListCol>{score.group.toUpperCase()}</ListCol>
                    <ListCol>{score.score}</ListCol>
                  </ListRow>
                ))}
              </InnerContainer>
            </Container>
          </div>
          <div className="column is-half">
            <Container>
              <InnerContainer>
                <ListRow isHeader>
                  <ListCol>Rank</ListCol>
                  <ListCol>Team</ListCol>
                  <ListCol>Score</ListCol>
                </ListRow>
                {scores.slice(5).map((score, idx) => (
                  <ListRow key={score.group}>
                    <ListCol>{idx + 6}</ListCol>
                    <ListCol>{score.group.toUpperCase()}</ListCol>
                    <ListCol>{score.score}</ListCol>
                  </ListRow>
                ))}
              </InnerContainer>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
