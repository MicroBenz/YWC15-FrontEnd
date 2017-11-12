import React, { Component } from 'react';
import styled from 'styled-components';

import connect from '../../store/connect';
import _FrameBox from '../../component/Core/FrameBox';

const FrameBox = styled(_FrameBox)`
  margin: 0 auto;
`;

const MajorTitle = styled.h2`
  text-align: center;
`;

export default class QueuePage extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column">
          <FrameBox>
            <MajorTitle>Content</MajorTitle>
            <img src="/static/img/roles/content.png" />
          </FrameBox>
        </div>
        <div className="column">
          <FrameBox>
            <MajorTitle>Design</MajorTitle>
            <img src="/static/img/roles/design.png" />
          </FrameBox>
        </div>
        <div className="column">
          <FrameBox>
            <MajorTitle>Marketing</MajorTitle>
            <img src="/static/img/roles/marketing.png" />
          </FrameBox>
        </div>
        <div className="column">
          <FrameBox>
            <MajorTitle>Programming</MajorTitle>
            <img src="/static/img/roles/programming.png" />
          </FrameBox>
        </div>
      </div>
    );
  }
}
