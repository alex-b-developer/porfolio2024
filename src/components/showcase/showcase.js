import React from 'react';
import './showcase.css';

function Showcase() {
  return (
    <div className="showcase">
      <iframe
        className="video-background"
        src="https://www.youtube.com/embed/4XS-2YAwEPk?autoplay=1&mute=1&loop=1&playlist=4XS-2YAwEPk" 
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      ></iframe>
      <div className="overlay"></div>
      <h1 className="showcase-text">Hello, I'm Alexander Betancur, a Web Developer</h1>
    </div>
  );
}

export default Showcase;