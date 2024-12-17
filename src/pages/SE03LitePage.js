import React, { useState, useEffect } from 'react';
import './product1.css';
import { Link } from 'react-router-dom';
import VehicleColor2 from '../components/color2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Specifications from '../components/Specifications';


const RhynoSE03Lite = () => {
  const [batteryCharge, setBatteryCharge] = useState(100); // Initial battery charge

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, mirror: true }); // Initialize AOS with options

    const interval = setInterval(() => {
      setBatteryCharge((prevCharge) => (prevCharge > 0 ? prevCharge - 1 : 0));
    }, 1000); // Update battery charge every second (1000ms)

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  

  return (
    <div className="product-page">
      <h1 data-aos="fade-up">Rhyno SE03 Lite Electric Scooter</h1>

      {/* Color Selection Section */}
      <div className="color-selection" data-aos="fade-up">
        < VehicleColor2 />
      </div>
      
      <div>
        <Link to="/pre-book">
          <button className="buy-now-button"  data-aos="fade-up">
            Buy Now
          </button>
        </Link>
        </div>

      <div className="product-details">
        {/* Overview Section */}
        <div className="overview" data-aos="fade-up">
          <h2>Overview:</h2>
          <p>
            Indulge in the perfect harmony of power and range with the Rhyno SE03 Lite electric scooter.
            This robust scooter features a 2000W motor and a 2.7kWh battery, delivering an exhilarating
            experience with an impressive range of 80-100km on a single charge.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="features" data-aos="fade-up">
          <h2>Key Features:</h2>
          <p>
            The Rhyno SE03 Lite comes with a powerful 2000W motor and a 2.7kWh battery. It boasts a 
            waterproof (IP67) design, with a 3-year warranty, and can be fully charged in just 3 hours 
            using a 12A charger. The scooter offers a maximum speed of 50 km/h, ensuring a stable and 
            comfortable ride with its fire-safe battery and other safety features.
          </p>
        </div>

        {/* Battery Charge Section */}
        <div className="battery" data-aos="fade-up">
          <h2>Battery Charge:</h2>
          <div className="battery-icon">
            <div
              className={`battery-level ${batteryCharge <= 20 ? 'low-battery' : ''}`}
              style={{ width: `${batteryCharge}%`, animation: `charge-down ${500 / 100}s linear infinite` }}
            />
          </div>
        </div>

        {/* Specifications Section */}
        <Specifications />
       

      </div>
    </div>
  );
};

export default RhynoSE03Lite;
