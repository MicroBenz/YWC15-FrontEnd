import React from 'react';
import styled from 'styled-components';

const Foreground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

class Parallax extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.updateParallax, false);
    this.updateParallax();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateParallax, false);
  }

  setPosition = (yPos) => {
    this.dom.style.transform = `translate3d(0, ${yPos}px, 0)`;
  }

  updateParallax = () => {
    window.requestAnimationFrame(() => {
      this.setPosition(window.scrollY * this.props.speed);
    });
  }

  render() {
    return (
      <Foreground innerRef={dom => (this.dom = dom)}>
        {this.props.children}
      </Foreground>
    );
  }
}

export default Parallax;
