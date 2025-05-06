import React from 'react';
import image1 from './images/g1.jpg';
import image2 from './images/g2.jpg';
import image3 from './images/g3.jpg';
import image4 from './images/g4.jpg';
import image5 from './images/g5.jpg';
import image6 from './images/g6.jpg';
import './Others.css';

function Others() {
    const images = [    { src: image1, title: 'Materinty' },
        { src: image2, title: 'House Warming' },
        { src: image3, title: 'Modeling' },
        { src: image4, title: 'School/College Events' },
        { src: image5, title: 'Club evnts' },
        { src: image6, title: 'spl Moments' },];

  return (
  
    <div className="image-grid">
        
      {images.map((image, index) => (
        <div className="image-item" key={index}>
        

          <img src={image.src} alt={image.title} />
          <h3>{image.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Others;
