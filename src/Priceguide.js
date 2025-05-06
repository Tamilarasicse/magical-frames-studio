
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import "./Priceguide.css";
import marriage from "./images/mp2.jpg";
import birthday from "./images/bp.jpg";
import others from "./images/mp2.jpg";
import Marriageprice from './Marrigeprice';
import Bp from './Bp';

// Home Component
function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/Marriageprice');
  };
  const handleNavigate1 = () => {
    navigate('/Bp');
  };

  return (
    <div className="priceguide">
      <h1 className="title">Price Guide</h1>

      {/* Wedding Section */}
      <div className="Marriage">
        <div className="p1">
          <img src={marriage} style={{ width: '100%' }} alt="marriage" />
        </div>
        <div className="p2">
          <h1 className="head">Wedding & Reception</h1>
          <p>A wedding is the start of a beautiful forever, and we’re here to preserve every magical moment.</p>
          <button className="button" onClick={handleNavigate}>Click</button>
        </div>
      </div>

      {/* Birthday Section */}
      <div className="Birthday">
        <div className="p1">
          <img src={birthday} style={{ width: '100%' }} alt="birthday" />
        </div>
        <div className="p2">
          <h1 className="head">Birthday Party</h1>
          <p>Celebrate your special day, and let us capture every moment!</p>
          <button className="button" onClick={handleNavigate1}>Click</button>
        </div>
      </div>

     
    </div>
  );
}

// Main Priceguide Component
function Priceguide() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Marriageprice" element={<Marriageprice />} />
        <Route path="/Bp" element={<Bp />} />
      </Routes>
    </Router>
  );
}

export default Priceguide;




















