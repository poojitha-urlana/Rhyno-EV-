import React, { useState } from 'react';
import './Comparison.css';

const Comparison = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`comparison-container ${theme}`}>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? 'Dark' : 'Light'} 
      </button>
      <h2>Compare All</h2>
      <div className="comparison-table">
        <table>
          <thead>
            <tr>
              <th>Specification</th>
              <th>Rhyno SE03 Lite</th>
              <th>Rhyno SE03</th>
              <th>Rhyno SE03 Max</th>
            </tr>
          </thead>
          <tbody>
            {[
              { spec: "Battery", lite: "1.8 kWh", se03: "2.7 kWh", max: "2.7 kWh" },
              { spec: "Battery Features", lite: "LFP with 1500 cycles, Active Balancing, Waterproof (IP67)", se03: "LFP with 1500 cycles, Active Balancing, Waterproof (IP67)", max: "LFP with 1500 cycles, Active Balancing, Waterproof (IP67)" },
              { spec: "Battery Warranty", lite: "3 Years", se03: "3 Years", max: "3 Years" },
              { spec: "Charging Time", lite: "3 hours (12A)", se03: "4 hours (12A)", max: "4 hours (12A)" },
              { spec: "Motor", lite: "1500W", se03: "1500W", max: "2000W" },
              { spec: "Max Speed", lite: "55 km/h", se03: "55 km/h", max: "65 km/h" },
              { spec: "Warranty on Electronics", lite: "1 Year", se03: "1 Year", max: "1 Year" },
              { spec: "Max Range (@30km/h)", lite: "100 km", se03: "150 km", max: "120 km" },
              { spec: "Max Range (@45km/h)", lite: "90 km", se03: "110 km", max: "100 km" },
              { spec: "Max Range (@full speed)", lite: "60 km", se03: "90 km", max: "80 km" },
              { spec: "Other Key Benefits", lite: "Fire-safe battery, Range prediction, Comfortable ride, Stable and safe", se03: "Fire-safe battery, Range prediction, Comfortable ride, Stable and safe", max: "Fire-safe battery, Range prediction, Comfortable ride, Stable and safe" },
            ].map((row, index) => (
              <tr key={index}>
                <td>{row.spec}</td>
                <td>{row.lite}</td>
                <td>{row.se03}</td>
                <td>{row.max}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comparison;
