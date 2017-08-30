import React from 'react';
import styled from 'styled-components'

import SectionHeader from './SectionHeader';
import FrameBox from '../Core/FrameBox';

const GalleryContainer = styled.div.attrs({
  className: 'container'
})`
  padding: 40px 0;
  @media(max-width: 768px) {
    
  }
`;

const GalleryItem = styled(FrameBox)`
  width: 100% !important;
  padding: 15px;
  text-align: left;
  margin: 15px 0;
  cursor: pointer;
  transition: all .4s;
`;

const GalleryHero = styled(FrameBox)`
  width: 100% !important;
  padding: 50px;
  height: 500px;
`;

const Gallery = () => (
  <div>
    <SectionHeader title="Gallery" subtitle="ภาพบรรยากาศค่าย" />
    <GalleryContainer>
      <div className="columns">
        <div className="column">
          <GalleryHero />
        </div>
      </div>
      <div className="columns is-multiline">
        {
          [1,2,3,4,5,6,7,8,0].map(e => (
            <div className="column is-2 is-half-mobile">
              <GalleryItem>
                <h1>{`Gallery ${e}`}</h1>
              </GalleryItem>
            </div>
          ))
        }
      </div>
    </GalleryContainer>
  </div>
);

export default Gallery;
