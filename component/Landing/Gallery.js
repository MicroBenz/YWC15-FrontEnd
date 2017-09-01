import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import SectionHeader from './SectionHeader';
import FrameBox from '../Core/FrameBox';

import colors from '../../utils/colors';

const GalleryContainer = styled.div.attrs({
  className: 'container'
})`
  padding: 40px 0;
  padding-top: 0px;
  @media(max-width: 768px) {
    padding: 20px 0;
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
  height: 580px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: 50% 50%;
  transition: all .3s;
  @media(max-width: 768px) {
    height: 270px;
  }
`;

const Columns = styled.div.attrs({
  className: 'columns'
})`
  @media(max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const AllImageColumns = styled.div.attrs({
  className: 'columns is-multiline'
})`
  @media(max-width: 768px) {
    flex-wrap: nowrap !important;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    margin-left: 0;
    margin-right: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const AllImageColumn = styled.div.attrs({
  className: 'column is-2 is-half-mobile'
})`
  @media(max-width: 768px) {
    width: 40% !important;
    padding-right: 0;
  }
`;

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ctx: 0
    };
    this.resetInterval = this.resetInterval.bind(this);
  }

  componentDidMount() {
    this.interval = window.setInterval(() => {
      let newIdx = this.state.ctx + 1;
      if (newIdx >= 18) {
        newIdx = 0;
      }
      this.setState({ ctx: newIdx });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  resetInterval() {
    window.clearInterval(this.interval);
    this.interval = window.setInterval(() => {
      let newIdx = this.state.ctx + 1;
      if (newIdx >= 18) {
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
          <Columns>
            <div className="column">
              <GalleryHero img={`/static/img/gallery/${this.state.ctx + 1}.jpg`} />
            </div>
          </Columns>
          <AllImageColumns>
            {
              _.range(1, 19).map((x, i) => (
                <AllImageColumn key={`gallery-${i}`}>
                  <GalleryItem
                    img={`/static/img/gallery/${i + 1}.jpg`}
                    onClick={() => {
                      this.setState({ ctx: i });
                      this.resetInterval();
                    }}
                    className={i === this.state.ctx ? 'active' : ''}
                  />
                </AllImageColumn>
              ))
            }
          </AllImageColumns>
        </GalleryContainer>
      </div>
    );
  }
}

export default Gallery;
