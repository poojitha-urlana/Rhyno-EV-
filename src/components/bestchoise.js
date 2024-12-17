import React, { useState } from 'react';
import './BestChoice.css';
import { FaBatteryFull, FaChargingStation, FaMotorcycle } from 'react-icons/fa';

const specifications = [
  {
    name: 'Rhyno SE03 Lite',
    battery: '1.8Kwh',
    chargingTime: '3 hours (12A)',
    motor: '1500W',
    maxSpeed: '55 km/h',
    range: {
      '30km/h': '100 km',
      '45km/h': '90 km',
      fullSpeed: '60 km'
    },
    warranty: {
      battery: '3 years',
      electronics: '1 year'
    }
  },
  {
    name: 'Rhyno SE03',
    battery: '2.7Kwh',
    chargingTime: '4 hours (12A)',
    motor: '1500W',
    maxSpeed: '55 km/h',
    range: {
      '30km/h': '150 km',
      '45km/h': '110 km',
      fullSpeed: '90 km'
    },
    warranty: {
      battery: '3 years',
      electronics: '1 year'
    }
  },
  {
    name: 'Rhyno SE03 Max',
    battery: '2.7Kwh',
    chargingTime: '4 hours (12A)',
    motor: '2000W',
    maxSpeed: '65 km/h',
    range: {
      '30km/h': '120 km',
      '45km/h': '100 km',
      fullSpeed: '80 km'
    },
    warranty: {
      battery: '3 years',
      electronics: '1 year'
    }
  }
];

const BestChoice = () => {
  const [bestChoice, setBestChoice] = useState(null);

  const determineBestChoice = () => {
    // Logic to determine the best choice
    setBestChoice((prevChoice) => (prevChoice === 'Rhyno SE03 Max' ? null : 'Rhyno SE03 Max'));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rhyno EV Best Choice</h1>
        <button onClick={determineBestChoice} className="choose-button">
          Find Best Choice
        </button>
        {bestChoice && (
          <div className="best-choice">
            <h2>Best Choice: {bestChoice}</h2>
            <div className="specifications-container">
              {specifications.map((spec) => (
                <div key={spec.name} className={`specifications ${spec.name === bestChoice ? 'highlight' : ''}`}>
                  <h3>{spec.name}</h3>
                  <div className="spec-detail"><FaBatteryFull /> Battery: {spec.battery}</div>
                  <div className="spec-detail"><FaChargingStation /> Charging Time: {spec.chargingTime}</div>
                  <div className="spec-detail"><FaMotorcycle /> Motor: {spec.motor}</div>
                  <div className="spec-detail">Max Speed: {spec.maxSpeed}</div>
                  <div className="spec-detail">Max Range (@30km/h): {spec.range['30km/h']}</div>
                  <div className="spec-detail">Max Range (@45km/h): {spec.range['45km/h']}</div>
                  <div className="spec-detail">Max Range (full speed): {spec.range.fullSpeed}</div>
                  <div className="spec-detail">Battery Warranty: {spec.warranty.battery}</div>
                  <div className="spec-detail">Electronics Warranty: {spec.warranty.electronics}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default BestChoice;
