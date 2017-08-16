import React from 'react';

import FrameBox from '../Core/FrameBox';

const ImagePreview = (props) => (
  <FrameBox center>
    <div className="image-preview-wrapper">
      <img src={props.img} />
    </div>
    <style jsx>{`
      .image-preview-wrapper {
        width: 200px;
        height: 200px;
        img {
          height: 100%;
          object-fit: cover;
        }
      }
    `}</style>
  </FrameBox>
);

export default ImagePreview;
