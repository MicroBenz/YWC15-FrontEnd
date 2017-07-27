import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head';

import config from '../../config';

const IMAGE_COUNT = 16;
export default class ComingSoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 1
    };
  }

  componentWillMount() {
    if (!process.browser) return;
    [...Array(IMAGE_COUNT)].forEach((a, idx) => {
      (new Image()).src = `/static/img/coming-soon/gallery/${idx + 1}.jpg`; // eslint-disable-line
    });
  }

  componentDidMount() {
    ReactGA.initialize(config.gaTrackingID);
    ReactGA.pageview(window.location.pathname);
    this.interval = setInterval(() => {
      const { currentIndex } = this.state;
      this.setState({ currentIndex: currentIndex + 1 <= IMAGE_COUNT ? currentIndex + 1 : 1 });
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="coming-soon-container">
        <Head>
          <title>YWC#15 is coming</title>
          <meta name="description" content="YWC#15 กำลังจะมาแล้ว!!!!!" />
          <meta
            name="keywords"
            content="ywc,jwc,website,web content,web design, web marketing, web programming"
          />
        </Head>
        <div style={{ backgroundImage: `url('/static/img/coming-soon/gallery/${this.state.currentIndex}.jpg')` }} className="slideshow" />
        <div className="overlay" />
        <div className="logo-container">
          <img
            src="/static/img/coming-soon/logo.png"
            alt="YWC15 Logo"
            className="logo"
          />
          <h1 className="title f2 coming-soon">Coming Soon.</h1>
          <a href="https://th-th.facebook.com/ywcth/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px' }}>
            <i className="fa fa-facebook icon facebook" aria-hidden="true" />
          </a>
          <a href="https://twitter.com/ywcth" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter icon twitter" aria-hidden="true" />
          </a>
        </div>
        <style jsx global>{`
          @keyframes typing { from { width: 0; } }
          @keyframes blink-caret { 50% { border-color: transparent; } }
        `}</style>
        <style jsx>{`
          .coming-soon-container {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            .slideshow {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-blend-mode: darken;
              background-size: cover;
              background-position: center center;
              transition: 1s;
            }
            .overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.5);
            }
            .logo-container {
              z-index: 10;
              text-align: center;
              @media(max-width: 768px) {
                width: 100%;
              }
            }
          }
          img.logo {
            display: block;
            margin: auto;
            width: 75%;
            height: auto;
            @media(max-width: 768px) {
              width: 240px;
            }
          }
          img.social {
            filter: invert(100%);
            display:inline;
            margin: auto;
            padding: 10px;
            transform: scale(0.8);
          }

          .f2 {font-family: 'Rajdhani', sans-serif; }

          .title {
            text-align: center;
            color: #ffffff;
            text-shadow: 0 0 10px #636363;
            font-weight: 700;
            margin: 15px auto;
            @media(max-width: 768px) {
              margin: 10px auto;
            }
          }
          .coming-soon {
            display: block;
            margin: 0 auto;
            width: 70%;
            border-right: .1em solid white;
            font-size: 3em;
            text-transform: uppercase;
            margin-top: 0;
            letter-spacing: .2em;
            white-space: nowrap;
            overflow: hidden;
            -webkit-animation: typing 5s steps(13, end) alternate, blink-caret .5s step-end infinite alternate;
            @media(max-width: 768px) {
              font-size: 26px;
              {/* width: 80%; */}
            }
          }
          .icon {
            display: inline-block;
            border-radius: 50%;
            background-color: white;
            color: #333;
            width: 40px;
            height: 40px;
            line-height: 40px;
            font-size: 20px;
            transform: perspective(1px) translateZ(0);
            transition-property: color;
            transition-duration: 1s;
            @media(max-widyh: 768px) {
              width: 40px;
              height: 40px;
              line-height: 40px;
              font-size: 22px;
            }
            &.facebook {
              &:hover {
                background-color: #3b5998;
                color: white;
              }
            }
            &.twitter {
              &:hover {
                background-color: #4099ff;
                color: white;
              }
            }
          }
        `}</style>
      </div>
    );
  }
}
