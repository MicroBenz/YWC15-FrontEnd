import React from 'react';

import { isMobile } from '../../utils/helpers';

export default () => (
  <div className="coming-soon-container">
    {!isMobile() && <video poster="#" id="bgvid" playsInline autoPlay muted loop>
      <source src="/static/img/coming-soon/YWC14.mp4" title="ywc-vedio" type="video/mp4" />
    </video>}
    <div className="logo-container">
      <img src="/static/img/coming-soon/logo.png" alt="ywc15-logo" title="ywc15-logo" className="logo" />
      <h1 className="title f2">Coming Soon.</h1>
      <a href="https://th-th.facebook.com/ywcth/" target="_blank" rel="noopener noreferrer">
        <img src="/static/img/coming-soon/fb.png" alt="ywc-page" className="social" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src="/static/img/coming-soon/twitter.png" alt="ywc-page" className="social" />
      </a>
    </div>
    <style jsx>{`
      .coming-soon-container {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        .logo-container {
          text-align: center;
        }
      }
      video { 
        position: fixed;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        max-width: none;
        width: auto;
        height: auto;
        transform: translateX(-50%) translateY(-50%);
        background-size: cover;
        transition: 1s opacity;
        filter: grayscale(100%);
        z-index: -100;
        filter: blur(5px);
        -webkit-filter: blur(5px);
        -moz-filter: blur(5px);
        -o-filter: blur(5px);
        -ms-filter: blur(5px);
        @media(max-width: 700px) {
          display: none;
        }
      }
      img.logo {
        display: block;
        margin: auto;
        width: 75%;
        height: auto;
      }
      
      img.social {
        filter: invert(100%);
        display:inline;
        margin: auto;
        padding: 10px;
        transform: scale(0.8);
      }
      
      .f1 {font-family: 'Ubuntu', sans-serif; }
      .f2 {font-family: 'Rajdhani', sans-serif; }
      .f3 {font-family: 'Megrim', cursive; }
      .f4 {font-family: 'Mitr', sans-serif; }

      .title {
          text-align: center;
          color: #ffffff;
          text-shadow: 0 0 10px #636363;
          font-weight: 700;
      }
      @keyframes typing { from { width: 0; } }
      @keyframes blink-caret { 50% { border-color: transparent; } }
      h1 {
        border-right: .1em solid white;
        font-size: 3em;
        text-transform: uppercase;
        margin-top: 0;
        letter-spacing: .3em;
        white-space: nowrap;   
        overflow: hidden;
        -webkit-animation: typing 2.5s steps(14, end) alternate;
      }
    `}</style>
  </div>
);
