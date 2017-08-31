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
  position: relative;
  background-image: url(${props => props.img});
  height: 140px;
  width: 100%;
  background-size: cover;
  background-position: 50% 50%;
`;

const GalleryHero = styled(FrameBox)`
  width: 100% !important;
  padding: 50px;
  height: 500px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: 50% 50%;
`;

const Gallery = () => (
  <div>
    <SectionHeader title="Gallery" subtitle="ภาพบรรยากาศค่าย" />
    <GalleryContainer>
      <div className="columns">
        <div className="column">
          <GalleryHero img={'/static/img/gallery/mockup.jpg'} />
        </div>
      </div>
      <div className="columns is-multiline">
        {
          [1,2,3,4,5,6,7,8,0,1,2,3].map(e => (
            <div className="column is-2 is-half-mobile">
              <GalleryItem img={'/static/img/gallery/mockup.jpg'} />
            </div>
          ))
        }
      </div>
    </GalleryContainer>
  </div>
);

export default Gallery;
