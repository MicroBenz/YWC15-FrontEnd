import React from 'react';
import styled from 'styled-components';

import SectionHeader from './SectionHeader';

const MapPhoto = styled.div`
  transition: all .4s;

  img {
    transition: all .4s;
  }
  &:hover {
    
    img {
      opacity: 0.6;
    }
  }
`;

class Map extends React.Component {
  state = {
    map: false
  }
  render() {
    return (
      <div>
        <SectionHeader title="Location" subtitle="แผนที่เดินทาง" />
        <div className="container">
          {
            this.state.map
              ? (<div />)
              : (
                <MapPhoto>
                  <img src="/static/img/landing/map_v2.png" alt="" />
                </MapPhoto>
              )
          }
        </div>
      </div>
    );
  }
}

export default Map;
