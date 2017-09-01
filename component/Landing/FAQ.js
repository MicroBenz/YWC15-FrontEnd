import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import SectionHeader from './SectionHeader';
import FrameBox from '../Core/FrameBox';
import colors from '../../utils/colors';
import content from './content.json';

const QuestionBox = styled(FrameBox)`
  width: 100% !important;
  padding: 15px;
  text-align: left;
  margin: 15px 0;
  cursor: pointer;
  opacity: 0.8;
  transform: scale(.95);
  transition: all .4s;

  &.active {
    transform: scale(1);
    opacity: 1;
    color: ${colors.cyan};
    background-color: ${rgba(colors.darkCyan2, 0.4)};
  }

  h1 {
    font-size: 16px;
    letter-spacing: 6px;
    line-height: 1;
    padding: 6px 0;
    opacity: 0.6;
  }

  h2 {
    font-size: 20px;
  }
`;

const AnswerBox = styled(FrameBox)`
  width: 100% !important;
  padding: 15px;
  text-align: left;
  margin: 15px 0;
  background-color: ${rgba(colors.darkCyan2, 0.4)};

  h3 {
    color: ${colors.cyan};
    font-size: 18px;
    letter-spacing: 12px;
    line-height: 1;
    padding: 6px 0;
    opacity: 0.6;
  }

  h1 {
    font-size: 32px;
    color: ${colors.cyan};
  }

  p {
    font-size: 20px;
    letter-spacing: .2px;
    text-indent: 15px;
    white-space: pre-line;
  }

  @media(max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div.attrs({
  className: 'container'
})`
  @media(max-width: 768px) {
    padding: 0 5%;
  }
`;

const MobileAnswerCollapse = styled(FrameBox)`
  display:none;

  @media(max-width: 768px) {
    display: block;
  }
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all .8s;
  transform: scale(.98);

  p {
    padding: 10px;
  }

  &.active {
    max-height: 500px;
    opacity: 1;
    background-color: ${rgba(colors.darkCyan2, 0.4)};
  }
`;

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  render() {
    return (
      <Container>
        <SectionHeader title="Q & A" subtitle="ถาม - ตอบ" />
        <div className="columns">
          <div className="column">
            {
              content.qa.map((q, key) => (
                <div>
                  <QuestionBox
                    onClick={() => this.setState({ current: key })}
                    className={this.state.current === key && 'active'}
                    key={key} // eslint-disable-line
                  >
                    <h1>QUESTION</h1>
                    <h2>{q.q}</h2>
                  </QuestionBox>
                  <MobileAnswerCollapse
                    className={this.state.current === key && 'active'}
                  >
                    <p>{ content.qa[this.state.current].a }</p>
                  </MobileAnswerCollapse>
                </div>
              ))
            }
          </div>
          <div className="column is-two-thirds">
            <AnswerBox>
              <h3 className="header">QUESTION/ANSWER</h3>
              <h1>
                { content.qa[this.state.current].q }
              </h1>
              <p>
                { content.qa[this.state.current].a }
              </p>
            </AnswerBox>
          </div>
        </div>
      </Container>
    );
  }
}

export default QA;
