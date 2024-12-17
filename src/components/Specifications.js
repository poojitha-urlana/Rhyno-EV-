import React from 'react';
import './Specifications.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faRoad, faCogs, faShieldAlt } from '@fortawesome/free-solid-svg-icons';


const Specifications = () => {
  return (
    <div className="specifications">
      <h2>Specifications</h2>
      <h3>Rhyno SE03 Lite</h3>
      <ul>
        <li><strong>Battery:</strong> 1.8 kWh, LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</li>
        <li><strong>Battery Warranty:</strong> 3 Years</li>
        <li><strong>Charging Time:</strong> 3 hours (12A)</li>
        <li><strong>Motor:</strong> 1500W</li>
        <li><strong>Max Speed:</strong> 50 km/h</li>
        <li><strong>Warranty on Electronics:</strong> 1 year</li>
        <li><strong>Max Range (@30 km/h):</strong> 100 km</li>
        <li><strong>Max Range (@45 km/h):</strong> 90 km</li>
        <li><strong>Max Range (@full speed):</strong> 70 km</li>
      </ul>
      <h3>Other Key Benefits</h3>
      <ul className="benefits-list">
        <li><FontAwesomeIcon icon={faFire} className="icon-fire" /> Fire-safe battery</li>
        <li><FontAwesomeIcon icon={faRoad} className="icon-road" /> Range prediction</li>
        <li><FontAwesomeIcon icon={faCogs} className="icon-cogs" /> Comfortable ride</li>
        <li><FontAwesomeIcon icon={faShieldAlt} className="icon-shield" /> Stable and safe</li>
      </ul>
    </div>
  );
};

export default Specifications;
