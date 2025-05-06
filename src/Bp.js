
import React from 'react';
import "./Bp.css";
import Birthday1 from "./images/mp2.jpg";
import Birthday2 from "./images/mp1.jpg";
import Birthday3 from "./images/mp.jpg";


const Bp= () => {
  return (
    <div className="price-guide">
      <header className="header">
        <h1>BIRTHDAY PARTY <br />  & PUBERTY</h1>
        <h2>Price Guide</h2>
      </header>

      {/* Basic Package */}
      <section className="package">
        <div className="package-image">
          <img src={Birthday1} alt="Basic Package" />
        </div>
        <div className="package-details">
          <h3>STANDARD PACKAGE</h3>
          <p className="price">₹ 20,000</p>
          <ul>
            <li>Traditional Photo</li>
            <li>Traditional Video</li>
            <li>Standard Album </li>
            <li>Complementry : Pendrive + Photo frame + Calender</li>
          </ul>
        </div>
      </section>

      {/* Standard Package */}
      <section className="package">
        <div className="package-image">
          <img src={Birthday2} alt="Standard Package" />
        </div>
        <div className="package-details">
          <h3>PREMIUM PACKAGE</h3>
          <p className="price">₹ 30,000</p>
          <ul>
            <li>Traditional Photo</li>
            <li>Traditional Video</li>
            <li>Candid Photo</li>
            <li>1 Standard Album </li>
            <li>Family potraits </li>
            <li>Video + Montage video</li>
            <li>Complementry :Pendrive + Free frame + Calender</li>
          </ul>
        </div>
      </section>

      {/* Premium Package */}
      <section className="package">
        <div className="package-image">
          <img src={Birthday3} alt="Premium Package" />
        </div>
        <div className="package-details">
          <h3>Deluxe PACKAGE</h3>
          <p className="price">₹ 43,000</p>
          <ul>
          <li>Traditional Photo</li>
            <li>Traditional Video</li>
            <li>Candid Photo</li>
            <li>Candid Video</li>
            <li>Montage Video (3 mins) + Teaser</li>
            <li>Premium Album</li>
            <li>Family potraits</li>
            <li>Complementry : Pendrive + Free frame + Calender </li>
          </ul>
        </div>
      </section>
 

      <div className='drone'>
        <h1>For all Events: Drone service costs an extra ₹7,500 per session</h1>
      </div>
    </div>
  );
};




















export default Bp;