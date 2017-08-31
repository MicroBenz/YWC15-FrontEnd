import React from 'react';
import styled from 'styled-components';

import SectionHeader from './SectionHeader';
import FrameBox from '../Core/FrameBox';

import colors from '../../utils/colors';

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
  transition: all .3s;
  cursor: pointer;
  opacity: 0.6;

  &:hover {
    transform: scale(1.03);
  }

  &.active {
    box-shadow: 0 0 15px ${colors.cyan};
    opacity: 1;
  }
`;

const GalleryHero = styled(FrameBox)`
  width: 100% !important;
  padding: 50px;
  height: 500px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: 50% 50%;
  transition: all .3s;
`;

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ctx: 0
    };
  }

  componentDidMount() {
    this.interval = window.setInterval(() => {
      let newIdx = this.state.ctx + 1;
      if (newIdx >= 52) {
        newIdx = 0;
      }
      this.setState({ ctx: newIdx });
    }, 3000);
  }

  onClick(no) {
    this.setState({ ctx: no });
    clearInterval(this.interval);
    this.interval = window.setInterval(() => {
      let newIdx = this.state.ctx + 1;
      if (newIdx >= 52) {
        newIdx = 0;
      }
      this.setState({ ctx: newIdx });
    }, 3000);
  }

  render() {
    return (
      <div>
        <SectionHeader title="Gallery" subtitle="ภาพบรรยากาศค่าย" />
        <GalleryContainer>
          <div className="columns">
            <div className="column">
              <GalleryHero img={`/static/img/gallery/${this.state.ctx + 1}.jpg`} />
            </div>
          </div>
          <div className="columns is-multiline">
            {
              [...Array(52)].map((x, i) => (
                <div className="column is-2 is-half-mobile">
                  <GalleryItem
                    img={`/static/img/gallery/${i + 1}.jpg`}
                    onClick={() => this.onClick(i)}
                    className={ i === this.state.ctx ? 'active' : '' }
                  />
                </div>
              ))
            }
          </div>
        </GalleryContainer>
      </div>
    );
  }
}

export default Gallery;
