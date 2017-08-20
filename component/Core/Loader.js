import React from 'react';

const Loader = ({ size = 40, color = '#ffffff' }) => (
  <div className="sk-cube-grid" style={{ width: size, height: size }}>
    <div className="sk-cube sk-cube1" style={{ backgroundColor: color }} />
    <div className="sk-cube sk-cube2" style={{ backgroundColor: color }} />
    <div className="sk-cube sk-cube3" style={{ backgroundColor: color }} />
    <div className="sk-cube sk-cube4" style={{ backgroundColor: color }} />
    <div className="sk-cube sk-cube5" style={{ backgroundColor: color }} />
    <div className="sk-cube sk-cube6" style={{ backgroundColor: color }} />
    <div className="sk-cube sk-cube7" style={{ backgroundColor: color }} />
    <div className="sk-cube sk-cube8" style={{ backgroundColor: color }} />
    <div className="sk-cube sk-cube9" style={{ backgroundColor: color }} />
    <style jsx>{`
      @keyframes sk-cubeGridScaleDelay {
        0%, 70%, 100% {
          -webkit-transform: scale3D(1, 1, 1);
                  transform: scale3D(1, 1, 1);
        } 35% {
          -webkit-transform: scale3D(0, 0, 1);
                  transform: scale3D(0, 0, 1);
        } 
      }
      .sk-cube-grid {
        display: inline-block;
        transform: rotate(45deg);
      }

      .sk-cube-grid .sk-cube {
        width: 33%;
        height: 33%;
        float: left;
        -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
                animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out; 
      }
      .sk-cube-grid .sk-cube1 {
        -webkit-animation-delay: 0.2s;
                animation-delay: 0.2s; }
      .sk-cube-grid .sk-cube2 {
        -webkit-animation-delay: 0.3s;
                animation-delay: 0.3s; }
      .sk-cube-grid .sk-cube3 {
        -webkit-animation-delay: 0.4s;
                animation-delay: 0.4s; }
      .sk-cube-grid .sk-cube4 {
        -webkit-animation-delay: 0.1s;
                animation-delay: 0.1s; }
      .sk-cube-grid .sk-cube5 {
        -webkit-animation-delay: 0.2s;
                animation-delay: 0.2s; }
      .sk-cube-grid .sk-cube6 {
        -webkit-animation-delay: 0.3s;
                animation-delay: 0.3s; }
      .sk-cube-grid .sk-cube7 {
        -webkit-animation-delay: 0s;
                animation-delay: 0s; }
      .sk-cube-grid .sk-cube8 {
        -webkit-animation-delay: 0.1s;
                animation-delay: 0.1s; }
      .sk-cube-grid .sk-cube9 {
        -webkit-animation-delay: 0.2s;
                animation-delay: 0.2s; }
    `}</style>
  </div>
);

export default Loader;
