import React from 'react';
import './About.css';
function About() {
  return (
    <div className="profile-container">
      <div className="profile-image">
      <img src={require('./images/banner.jpeg')} ></img>
      </div>
      <div className="profile-content">
        <h1>Hi! I'm Dhanasekar. <br /> Creative Photographer.</h1>
        <p>
        I'm Dhanasekar, a professional photographer based in Chennai with 3 years of experience in the photography field. I have a solid understanding of photography, lighting, and visual composition, gained through hands-on work and creative projects.
        </p>
        <p>
        By combining creativity with the smart use of technology and efficient workflows, I ensure high-quality results while working quickly and effectively. I follow an agile approach to adapt, test ideas, and align with the needs of my clients and audience throughout the creative process.


        </p>
   
      </div>
    </div>
  );
}

export default About;
