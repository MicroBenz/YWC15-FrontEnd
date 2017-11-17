import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import candidate from './candidate.json';
import colors from '../../utils/colors';
import GlowingText from '../Core/GlowingText';
import SectionHeader from '../Landing/SectionHeader';

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

const QueueName = styled.h1`
  font-size: 26px;
  padding: 25px 18px 15px;
  background-color: ${rgba(colors.darkCyan2, 0.4)};
`;

const CanditateList = styled.ul`
  font-size: 20px;
  padding: 0px;

  li {
    margin: 0;
    padding: 14px 0 8px;
    border-top: 1px solid rgba(102, 252, 241, 0.7);
    transition: all .2s;

    &:hover {
      background-color: ${rgba(colors.darkCyan2, 0.4)};
    }
    
    .ref {
      font-weight: 800;
    }
  }
`;

const Homework = styled.div`
  padding: 15px 18px;
  font-size: 20px;
  border-top: 1px solid rgba(102, 252, 241, 0.7);
  text-align: left;

  p {
    text-indent: 15px;
  }
`;

const Column = styled.div`
  order: ${props => props.dOrder ? props.dOrder : 0};

  @media(max-width: 768px) {
    order: ${props => props.mOrder ? props.mOrder : 0};
  }
`;

const majorMorningCount = {
  design: 20,
  programming: 23,
  content: 25,
  marketing: 18
};

const Announcer = ({ major }) => (
  <div className="columns is-mobile is-multiline">
    <Column className="column is-full-mobile" dOrder={1} mOrder={2}>
      <Container>
        <InnerContainer>
          <QueueName>{'รายชื่อสัมภาษณ์ช่วงเช้า'}</QueueName>
          <CanditateList>
            {candidate[major.name].slice(0, majorMorningCount[major.name]).map(c => (
              <li key={c.interviewRef}><span className="ref">{`${c.interviewRef}_ `}</span><span>{`${c.firstName} ${c.lastName}`}</span></li>
            ))}
          </CanditateList>
        </InnerContainer>
      </Container>
    </Column>
    <Column className="column is-full-mobile" dOrder={2} mOrder={3}>
      <Container>
        <InnerContainer>
          <QueueName>{'รายชื่อสัมภาษณ์ช่วงบ่าย'}</QueueName>
          <CanditateList>
            {candidate[major.name].slice(majorMorningCount[major.name]).map(c => (
              <li key={c.interviewRef}><span className="ref">{`${c.interviewRef}_ `}</span><span>{`${c.firstName} ${c.lastName}`}</span></li>
            ))}
          </CanditateList>
        </InnerContainer>
      </Container>
    </Column>
    <Column className="column is-full-mobile" dOrder={3} mOrder={1}>
      <div className="columns">
        <div className="column">
          <Container>
            <InnerContainer>
              <QueueName>{`การบ้านสาขา${major.thaiName}`}</QueueName>
              <Homework>
                <div dangerouslySetInnerHTML={{ __html: major.homework }} />
              </Homework>
            </InnerContainer>
          </Container>
        </div>
      </div>
    </Column>
  </div>
);

export default Announcer;

