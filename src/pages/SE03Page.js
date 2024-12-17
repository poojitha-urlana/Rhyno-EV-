import React, { useState } from 'react';
import { Button } from 'reactstrap';
import './SE03Page.css';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import maxRed from '../assets/maxred.png';
import maxYellow from '../assets/maxyellow.png';
import maxBlack from '../assets/maxblack.png';
import { FaBatteryFull, FaBolt, FaShieldAlt, FaRoad } from 'react-icons/fa';

const RhynoSE03 = () => {
  const [selectedColor, setSelectedColor] = useState('red'); // Default color

  const vehicleColors = {
    red: maxRed,
    yellow: maxYellow,
    black: maxBlack,
  };

  
  return (
    <div className="product-page">
      <h1 data-aos="fade-up">Rhyno SE03 Electric Scooter</h1>

      {/* Color Selection Section */}
      <div className="color-selection" data-aos="fade-up">
        <div className="product-image">
          <img src={vehicleColors[selectedColor]} alt="Rhyno SE03" className="vehicle-image" data-aos="zoom-in" />
        </div>
        <div className="button-container">
          <Button color="danger" onClick={() => setSelectedColor('red')}>Red</Button>
          <Button color="warning" onClick={() => setSelectedColor('yellow')}>Yellow</Button>
          <Button color="dark" onClick={() => setSelectedColor('black')}>Black</Button>
        </div>
      </div>

      {/* Textual Details Section */}
      <div className="product-details">
        {/* Overview Section */}
        <div className="overview" data-aos="fade-up">
          <h2>Overview:</h2>
          <p>
            Indulge in the perfect harmony of power and range with the Rhyno SE03 electric scooter.
            This robust scooter features a 2000W motor and a 2.7kWh battery, delivering an exhilarating
            experience with an impressive range of 80-100km on a single charge.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="features" data-aos="fade-up">
          <h2>Key Features:</h2>
          <p>
            The Rhyno SE03 comes with a powerful 2000W motor and a 2.7kWh battery. It boasts a 
            waterproof (IP67) design, with a 3-year warranty, and can be fully charged in just 4 hours 
            using a 12A charger. The scooter offers a maximum speed of 55 km/h, ensuring a stable and 
            comfortable ride with its fire-safe battery and other safety features.
          </p>
        </div>


        {/* Specifications Section */}
        <div className="specifications" data-aos="fade-up">
          <h2>Specifications</h2>
          <h3>Rhyno SE03</h3>
          <ul>
            <li><strong>Battery:</strong> 2.7 kWh</li>
            <li><strong>Battery Features:</strong> LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</li>
            <li><strong>Battery Warranty:</strong> 3 Years</li>
            <li><strong>Charging Time:</strong> 4 hours (12A)</li>
            <li><strong>Motor:</strong> 2000W</li>
            <li><strong>Max Speed:</strong> 55 km/h</li>
            <li><strong>Warranty on Electronics:</strong> 1 year</li>
            <li><strong>Max Range (@30km/h):</strong> 150 km</li>
            <li><strong>Max Range (@45km/h):</strong> 110 km</li>
            <li><strong>Max Range (@full speed):</strong> 90 km</li>
          </ul>
          <h3>Other Key Benefits</h3>
          <ul>
            <li><FaBatteryFull style={{ color: 'green' }} /> Fire-safe battery</li>
            <li><FaBolt style={{ color: 'yellow' }} /> Range prediction</li>
            <li><FaRoad style={{ color: 'blue' }} /> Comfortable ride</li>
            <li><FaShieldAlt style={{ color: 'red' }} /> Stable and safe</li>
          </ul>
        </div>

        {/* Buy Now Section */}
        <h2 data-aos="fade-up">Buy Now:</h2>
        <Link to="/pre-book">
          <button className="buy-now-button" data-aos="fade-up">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RhynoSE03;
