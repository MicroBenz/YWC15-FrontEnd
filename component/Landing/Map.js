import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';

import SectionHeader from './SectionHeader';

const MapPhoto = styled.div`
  transition: all .4s;
  cursor: pointer;
  position: relative;

  img {
    transition: all .4s;
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 302px;
    width: 300px;
    z-index: 15;
    opacity: 0;
    display: flex;
    flex-direction: column;
    transition: all .4s;

    .icon {
      transition: all .4s;
    }

    h1, .icon {
      display: flex;
    }

    h1 {
      font-size: 48px;
      text-shadow: 0px 0px 12px ${colors.cyan};
    }
  }

  &:hover {

    img {
      opacity: 0.2;
    }

    .icon, .icon img {
      opacity: 1;
    }
  }
`;

const IconMap = styled.img`
  @media(max-width: 768px) {
    height: 100px;
  }
`;

const LinktoMap = styled.a`
  color: white;

  &:hover, &:focus {
    color: white;
  }
`

class Map extends React.PureComponent {
  render() {
    return (
      <div>
        <SectionHeader title="Location" subtitle="แผนที่เดินทาง" />
        <div className="container">
          <LinktoMap href="https://goo.gl/maps/HFJEdYAn9xv" target="_blank" rel="noopener noreferrer">
            <MapPhoto>
              <div className="icon">
                <IconMap src="/static/img/landing/materials/location-ywc.png" />
                <h1>เปิดแผนที่</h1>
              </div>
              <img src="/static/img/landing/map-pim.png" alt="" />
            </MapPhoto>
          </LinktoMap>
        </div>
      </div>
    );
  }
}

export default Map;
