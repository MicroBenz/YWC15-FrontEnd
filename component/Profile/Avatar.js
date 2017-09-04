import React from 'react';
import styled from 'styled-components';

import { getImagePath, majorAsText } from '../../utils/helpers';
import colors from '../../utils/colors';
import FrameBox from '../../component/Core/FrameBox';
import content from '../Landing/content.json';

const UserAvatar = styled.div`
  display: block;
  width: 200px;
  height: 200px;
  background-image: url('${props => getImagePath(props.picture)}');
  background-position: center;
  background-size: cover;
`;

const CompletedRegisText = styled.h2`
  text-align: center;
  font-size: 28px;
  margin-bottom: 10px;
  @media(max-width: 768px) {
    font-size: 20px;
    padding: 0 10px;
  }
`;

const CamperName = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  padding-top: 20px;
  line-height: 40px;
  color: ${colors.cyan};
`;

const Subtitle = styled.h2`
  text-align: center;
  font-size: 25px;
  ${props => props.extraPadding && `
    line-height: 20px;
    padding-top: 8px;
  `}
  ${props => props.small && `
    font-size: 20px;
  `}
`;

const Avatar = props => (
  <div className="container">
    <CompletedRegisText>** {content.doneRegister} **</CompletedRegisText>
    <FrameBox center>
      <UserAvatar picture={props.previewPicture} />
    </FrameBox>
    <CamperName>{props.nickname}</CamperName>
    <Subtitle extraPadding>{props.firstName} {props.lastName}</Subtitle>
    <Subtitle>{majorAsText(props.major)}</Subtitle>
  </div>
);

export default Avatar;
