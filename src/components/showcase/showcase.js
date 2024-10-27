import React from 'react';
import './showcase.css';
import videoSource from '../../assets/alex-dev-bg.mp4';

function Showcase() {
  return (
    <div className="showcase">
      <video 
        className="showcase-video-background"
        src={videoSource}
        autoPlay 
        muted 
        loop 
        playsInline
      ></video>
      <div className="showcase-overlay"></div>
      <h1 className="showcase-text">Hello, I'm Alexander Betancur, Web Developer</h1>
    </div>
  );
}

export default Showcase;