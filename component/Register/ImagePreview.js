import React from 'react';
import styled from 'styled-components';

import FrameBox from '../Core/FrameBox';

const Container = styled.div`
  width: 200px;
  height: 200px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const ImagePreview = props => (
  <FrameBox center>
    <Container>
      {props.img && <img src={props.img} alt="profile" />}
    </Container>
  </FrameBox>
);

export default ImagePreview;
