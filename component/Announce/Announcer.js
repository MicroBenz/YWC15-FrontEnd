import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

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
  font-size: 32px;
  padding: 25px 18px 15px;
  background-color: ${rgba(colors.darkCyan2, 0.4)};
`;

const CanditateList = styled.ul`
  font-size: 20px;
  padding: 0px;

  li {
    margin: 0;
    padding: 14px 0 8px;
    border-top: 1px solid ${colors.cyan};
    transition: all .2s;

    &:hover {
      background-color: ${rgba(colors.darkCyan2, 0.4)};
    }
  }
`;

const Homework = styled.p`
  padding: 15px 18px;
  font-size: 20px;
  border-top: 1px solid ${colors.cyan};
`;

const Announcer = () => (
  <div className="columns">
    <div className="column">
      <Container>
        <InnerContainer>
          <QueueName>{'รายชื่อสัมภาษณ์ช่วงเช้า'}</QueueName>
          <CanditateList>
            {
              [...Array(40)].map((u, index) => (
                <li>{`P${index + 1}: Kanisorn Sutham`}</li>
              ))
            }
          </CanditateList>
        </InnerContainer>
      </Container>
    </div>
    <div className="column">
      <Container>
        <InnerContainer>
          <QueueName>{'รายชื่อสัมภาษณ์ช่วงบ่าย'}</QueueName>
          <CanditateList>
            {
              [...Array(40)].map((u, index) => (
                <li>{`P${index + 41}: Kanisorn Sutham`}</li>
              ))
            }
          </CanditateList>
        </InnerContainer>
      </Container>
    </div>
    <div className="column">
      <Container>
        <InnerContainer>
          <QueueName>{'การบ้านประจำสาขา'}</QueueName>
          <Homework>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quisquam sed eligendi aperiam esse et blanditiis amet, reprehenderit magni, earum enim debitis mollitia rerum quas nihil voluptas ad non ab!
          </Homework>
        </InnerContainer>
      </Container>
    </div>
  </div>
);

export default Announcer;

