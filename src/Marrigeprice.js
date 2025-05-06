
import React from 'react';
import "./Marriageprice.css";
import wedding1 from "./images/mp2.jpg";
import wedding2 from "./images/mp1.jpg";
import wedding3 from "./images/mp.jpg";
import wedding4 from "./images/mp3.jpg";

const Marriageprice = () => {
  return (
    <div className="price-guide">
      <header className="header">
        <h1>WEDDING & RECEPTION</h1>
        <h2>Price Guide</h2>
      </header>

      {/* Basic Package */}
      <section className="package">
        <div className="package-image">
          <img src={wedding1} alt="Basic Package" />
        </div>
        <div className="package-details">
          <h3>STANDARD PACKAGE</h3>
          <p className="price">₹ 35,000</p>
          <ul>
            <li>Traditional Photo</li>
            <li>Traditional Video</li>
            <li>Standard Album - 2</li>
            <li>Family potraits</li>
            <li>Complementry : Pendrive + Free frame + Calender</li>
          </ul>
        </div>
      </section>

      {/* Standard Package */}
      <section className="package">
        <div className="package-image">
          <img src={wedding2} alt="Standard Package" />
        </div>
        <div className="package-details">
          <h3>PREMIUM PACKAGE</h3>
          <p className="price">₹ 55,000</p>
          <ul>
            <li>Traditional Photo</li>
            <li>Traditional Video</li>
            <li>Candid Photo</li>
            <li>1 Custom & 1 Standard Album </li>
            <li>Family potraits & Couple potraits </li>
            <li>Complementry :Pendrive + Free frame + Calender + Mug</li>
          </ul>
        </div>
      </section>

      {/* Premium Package */}
      <section className="package">
        <div className="package-image">
          <img src={wedding3} alt="Premium Package" />
        </div>
        <div className="package-details">
          <h3>DELUXE PACKAGE</h3>
          <p className="price"> ₹ 85,000</p>
          <ul>
          <li>Traditional Photo</li>
            <li>Traditional Video</li>
            <li>Candid Photo</li>
            <li>Candid Video</li>
            <li>Montage Video (3 mins)</li>
            <li>Premium Albums - 2 </li>
            <li>Outdoor shoot 1 day(3hrs)</li>
            <li>Unlimited Raw Photos</li>
            <li>Family potraits & Couple potraits </li>
            <li>Complementry : Pendrive + Free frame <br />Calender + Pillow</li>
          </ul>
        </div>
      </section>
 {/* Ultra deluxe Package */}
      <section className="package">
        <div className="package-image">
          <img src={wedding4} alt="Premium Package" />
        </div>
        <div className="package-details">
          <h3>ULTRA DELUXE PACKAGE</h3>
          <p className="price">₹ 1,40,000</p>
          <ul>
          <li>Traditional Photo</li>
            <li>Traditional Video</li>
            <li>Candid Photo</li>
            <li>Candid Video</li>
            <li>Montage Video (3 mins)</li>
            <li>3 Reels in Outdoor</li>
            <li>1 Song Smoof</li>
            <li>LED Wall</li>
            <li>Premium Albums - 2 </li>
            <li>Indoor shoot 1 day(3hrs) <br />10 edited photos</li>
            <li>Outdoor shoot 1 day(3hrs)</li>
            <li>Unlimited Raw Photos</li>
            <li>Family potraits & Couple potraits </li>
            <li>Complementry : Pendrive + Photo frame (4ft) +<br />Calender + Pillow + Couple Caricature</li>
          </ul>
        </div>
      </section>

      <div className='drone'>
        <h1>For all Events: Drone service costs an extra ₹7,500 per session</h1>
      </div>
    </div>
  );
};

export default Marriageprice; // Corrected export
















