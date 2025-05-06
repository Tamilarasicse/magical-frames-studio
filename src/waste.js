import React from "react";
import "./Priceguide.css";
import package1 from "./images/birthday.jpg";
import package2 from "./images/birthday.jpg";
import package3 from "./images/birthday.jpg";

const Priceguide = () => {
  return (
    <div className="pricing-guide">
      <h1 className="title">Price Guide</h1>
      <div className="packages">
        {/* Package I */}
        <div className="package">
          <img src={package1} alt="Package 1" />
          <h2>PACKAGE I</h2>
          <p className="price">$350</p>
          <ul>
            <li>30 min. session</li>
            <li>15 digital images</li>
            <li>Online gallery</li>
            <li>Facebook cover</li>
          </ul>
        </div>

        {/* Package II */}
        <div className="package">
          <img src={package2} alt="Package 2" />
          <h2>PACKAGE II</h2>
          <p className="price">$640</p>
          <ul>
            <li>30 min. session</li>
            <li>15 digital images</li>
            <li>Online gallery</li>
            <li>Facebook cover</li>
          </ul>
        </div>

        {/* Package III */}
        <div className="package">
          <img src={package3} alt="Package 3" />
          <h2>PACKAGE III</h2>
          <p className="price">$890</p>
          <ul>
            <li>30 min. session</li>
            <li>15 digital images</li>
            <li>Online gallery</li>
            <li>Facebook cover</li>
          </ul>
        </div>
      </div>

      {/* Prints, Albums, Canvas Section */}
      <div className="products">
        <div className="product-category">
          <h3>PRINTS</h3>
          <ul>
            <li>5 X 7 - $20</li>
            <li>8 X 10 - $48</li>
            <li>11 X 14 - $55</li>
            <li>16 X 20 - $90</li>
            <li>20 X 30 - $120</li>
            <li>30 X 40 - $200</li>
          </ul>
        </div>

        <div className="product-category">
          <h3>ALBUMS</h3>
          <ul>
            <li>Mini 3x3 - $100</li>
            <li>Mini 4x6 - $140</li>
            <li>5 X 5 - $210</li>
            <li>8 X 10 - $350</li>
            <li>10 X 10 - $495</li>
            <li>12 X 12 - $735</li>
          </ul>
        </div>

        <div className="product-category">
          <h3>CANVAS</h3>
          <ul>
            <li>5 X 7 - $20</li>
            <li>8 X 10 - $48</li>
            <li>11 X 14 - $55</li>
            <li>16 X 20 - $90</li>
            <li>20 X 30 - $120</li>
            <li>30 X 40 - $200</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <p className="footer">
        All returning clients receive $25 off their session! Restrictions apply.
        <br />
        www.salsaldesignphotography.com
      </p>
    </div>
  );
};

export default Priceguide;





















