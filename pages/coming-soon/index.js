import React, { Component } from 'react';
import Head from 'next/head';

import { isMobile } from '../../utils/helpers';

export default class ComingSoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 1
    };
  }

  componentWillMount() {
    if (!process.browser) return;
    new Array(52).forEach((idx) => {
      const image = new Image(); // eslint-disable-line
      image.src = `/static/img/coming-soon/gallery/${idx + 1}.jpg`;
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { currentIndex } = this.state;
      this.setState({ currentIndex: currentIndex + 1 <= 52 ? currentIndex + 1 : 1 });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className={`coming-soon-container`} style={{ backgroundImage: `url('/static/img/coming-soon/gallery/${this.state.currentIndex}.jpg')` }}>
        <Head>
          <title>YWC#15 is coming</title>
          <meta name="description" content="YWC#15 กำลังจะมาแล้ว!!!!!" />
          <meta
            name="keywords"
            content="ywc,jwc,website,web content,web design, web marketing, web programming"
          />
        </Head>
        <div className="logo-container">
          <img
            src="/static/img/coming-soon/logo.png"
            alt="YWC15 Logo"
            className="logo"
          />
          <h1 className="title f2 coming-soon">Coming Soon.</h1>
          <a href="https://th-th.facebook.com/ywcth/" target="_blank" rel="noopener noreferrer">
            <img src="/static/img/coming-soon/fb.png" alt="ywc-page" className="social" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/static/img/coming-soon/twitter.png" alt="ywc-page" className="social" />
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
            background-size: cover;
            .logo-container {
              text-align: center;
              @media(max-width: 768px) {
              width: 100%;
              }
            }
          }
          .bg-1 {
            background-image: url('/static/img/coming-soon/1.jpg');
          }
          .bg-2 {
            background-image: url('/static/img/coming-soon/2.jpg');
          }
          .bg-3 {
            background-image: url('/static/img/coming-soon/3.jpg');
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
          }
          .coming-soon {
            display: block;
            margin: 0 auto;
            width: 75%;
            border-right: .1em solid white;
            font-size: 3em;
            text-transform: uppercase;
            margin-top: 0;
            letter-spacing: .3em;
            white-space: nowrap;
            overflow: hidden;
            -webkit-animation: typing 2.5s steps(13, end) alternate, blink-caret .5s step-end infinite alternate;
            @media(max-width: 768px) {
              font-size: 26px;
              width: 80%;
            }
          }
        `}</style>
      </div>
    );
  }
}
