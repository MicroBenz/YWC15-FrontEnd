import React, { Component } from 'react';
import styled from 'styled-components';

import SectionHeader from './SectionHeader';
import GuruItem from './GuruItem';
import GuruDetail from './GuruDetail';
import gurus from './guru.json';

const GurusContainer = styled.div.attrs({
  className: 'container'
})`
  padding: 40px 0;
  @media(max-width: 768px) {
    
  }
`;

const Columns = styled.div.attrs({
  className: 'columns is-multiline'
})`
  @media(max-width: 768px) {
    flex-wrap: nowrap !important;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    margin-left: 0;
    margin-right: 0;
  }
`;

const Column = styled.div.attrs({
  className: 'column is-2 is-half-mobile'
})`
  @media(max-width: 768px) {
    padding: 0;
    margin-right: 20px;
    width: 30%;
    &:first-child {
      margin-left: 5%;
    }
  }
`;

const ItemWrapper = styled.div`
`;

export default class Guru extends Component {
  state = {
    idx: 0
  };

  componentDidMount() {
    this.interval = window.setInterval(() => {
      let newIdx = this.state.idx + 1;
      if (newIdx >= gurus.length) {
        newIdx = 0;
      }
      this.setState({ idx: newIdx });
      this.scroll(newIdx);
    }, 2000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  scroll(index) {
    const scrollElem = document.getElementById('scroller');
    const toScrollElem = scrollElem.getElementsByClassName('scroller-item')[index];
    console.log(toScrollElem.offsetLeft);
    scrollElem.scrollLeft = toScrollElem.offsetLeft;
  }

  render() {
    return (
      <div>
        <SectionHeader title="Guru" subtitle="วิทยากร" />
        <GuruDetail {...gurus[this.state.idx]} />
        <GurusContainer>
          <Columns id="scroller">
            {gurus.map((guru, idx) => (
              <Column key={`${guru.name}-${guru.major}-${idx}`} className="scroller-item">
                <ItemWrapper>
                  <GuruItem
                    active={idx === this.state.idx}
                    {...guru}
                    onClick={() => this.setState({ idx })}
                  />
                </ItemWrapper>
              </Column>
            ))}
          </Columns>
        </GurusContainer>
      </div>
    );
  }
}
