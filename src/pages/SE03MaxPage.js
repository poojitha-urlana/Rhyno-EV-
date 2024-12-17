import React from 'react';
import './product3.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import Vehicle from '../components/color1';

const RhynoEVSE03MaxPage = () => {
  return (
    <div className="max-product-page">
      <h1 data-aos="fade-up">Rhyno SE03 Max Electric Scooter</h1>

      {/* Color Selection Section */}
      <div className="max-color-selection" data-aos="fade-up">
        <Vehicle />
      </div>

      {/* Buy Now Button */}
      <div className="max-buy-now">
        <Link to="/pre-book">
          <button className="max-buy-now-button" data-aos="fade-up">
            Buy Now
          </button>
        </Link>
      </div>

      {/* Product Details */}
      <div className="max-product-details">
        {/* Overview Section */}
        <div className="max-overview" data-aos="fade-up">
          <h2>Overview:</h2>
          <p>
            Indulge in the perfect harmony of power and range with the Rhyno SE03 Max electric scooter.
            This robust scooter features a 2000W motor and a 2.7kWh battery, delivering an exhilarating
            experience with an impressive range of 80-100km on a single charge.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="max-features" data-aos="fade-up">
          <h2>Key Features:</h2>
          <p>
            The Rhyno SE03 Max comes with a powerful 2000W motor and a 2.7kWh battery. It boasts a 
            waterproof (IP67) design, with a 3-year warranty, and can be fully charged in just 3 hours 
            using a 12A charger. The scooter offers a maximum speed of 55 km/h, ensuring a stable and 
            comfortable ride with its fire-safe battery and other safety features.
          </p>
        </div>

        {/* Additional Information for Rhyno SE03 Max */}
        <div className="max-additional-info" data-aos="fade-up">
          <h2>Additional Information:</h2>
          <p>
            Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!
          </p>

          <h3>Specifications:</h3>
          <ul>
            <li><strong>Battery:</strong> 2.7 kWh</li>
            <li><strong>Battery Features:</strong> LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</li>
            <li><strong>Battery Warranty:</strong> 3 Years</li>
            <li><strong>Charging Time:</strong> 4 hours (12A)</li>
            <li><strong>Motor:</strong> 1500W</li>
            <li><strong>Max Speed:</strong> 55 km/h</li>
            <li><strong>Warranty on Electronics:</strong> 1 Year</li>
            <li><strong>Max Range (@30 km/h):</strong> 150 km</li>
            <li><strong>Max Range (@45 km/h):</strong> 110 km</li>
            <li><strong>Max Range (@full speed):</strong> 90 km</li>
            <li><strong>Other Key Benefits:</strong> Fire-safe battery, Range prediction, Comfortable ride, Stable and safe</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default RhynoEVSE03MaxPage;
