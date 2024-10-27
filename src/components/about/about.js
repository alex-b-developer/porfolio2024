import React from "react";
import "./about.css";
import videoSource from '../../assets/dev-bg.mp4';

function About() {
  return (
    <div className="about">
      <video 
        className="about-video-background"
        src={videoSource}
        autoPlay 
        muted 
        loop 
        playsInline
      ></video>
      <div className="overlay-about"></div>

      <p>
        Front-End developer in JavaScript with React and Alipay Miniprogram.
        <br></br>
        Web developer and designer with experience in developing sites on
        WordPress. <br></br>
        Web template designer for email marketing using HTML, CSS, and
        JavaScript. <br></br>
        Cpanel system administrator for the management and configuration of
        hosting, domains, DNS, SSL certificates, and MySQL databases. <br></br>
        Currently developing skills and competencies as a Fullstack developer
        and in artificial intelligence AI.
        <br></br>
        <br></br>
        <br></br>
        <a href="https://wa.me/573148734025" target="_blank" rel="noreferrer">
          DO YOU WANT TO GET A NEW WEBSITE? CONTACT ME NOW!
        </a>
      </p>
    </div>
  );
}

export default About;
