import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import _ from 'lodash';

import finalist from './finalist.json';
import backup from './backup.json';
import colors from '../../utils/colors';

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

const BackupContainer = Container.extend`
  margin-top: 50px;
  @media(max-width: 768px) {
    margin-top: 30px;
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

const FinalistList = styled.ul`
  font-size: 20px;
  padding: 0px;
  text-align: center;
  li {
    margin: 0;
    padding: 14px 0 8px;
    border-top: 1px solid rgba(102, 252, 241, 0.7);
    transition: all .2s;
    background-color: ${rgba(colors.darkCyan2, 0.4)};
    &.no-bg {
      background-color: ${rgba(colors.darkCyan2, 0)};
    }
    &.col {
      display: flex;
      span {
        flex: 1;
        &.amount {
          width: 80px;
          flex: none;
        }
      }
    }
    .ref {
      font-weight: 800;
    }
}
`;

const MajorList = (props) => {
  const { major } = props;
  let indexPad;
  if (major === 'content') {
    indexPad = 1;
  }
  if (major === 'design') {
    indexPad = 21;
  }
  if (major === 'marketing') {
    indexPad = 41;
  }
  if (major === 'programming') {
    indexPad = 61;
  }
  return (
    <div>
      <Container>
        <InnerContainer>
          <FinalistList>
            <li>ชื่อ-นามสกุล และยอดเงินที่ต้องโอน</li>
            {finalist[major].map((c, idx) => (
              <li className="no-bg col" key={c.interviewRef}><span>{`${c.firstName} ${c.lastName}`}</span><span className="ref amount">{`500.${_.padStart(indexPad + idx, 2, '0')}`}</span></li>
            ))}
          </FinalistList>
        </InnerContainer>
      </Container>
      <BackupContainer>
        <InnerContainer>
          <FinalistList>
            <li>รายชื่อสำรองสาขา web {major}</li>
            {backup[major].map(c => (
              <li className="no-bg" key={c.interviewRef}><span>{`${c.firstName} ${c.lastName}`}</span></li>
            ))}
          </FinalistList>
        </InnerContainer>
      </BackupContainer>
    </div>
  );
};

export default MajorList;
