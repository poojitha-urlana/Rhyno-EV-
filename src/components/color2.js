import React, { useState } from 'react';
import { Button } from 'reactstrap';
import maxBlue from '../assets/liteblue.png';
import maxBlack from '../assets/maxred.png';
import maxYellow from '../assets/maxyellow.png';
import './color2.css';

const VehicleColor2 = () => {
  const [color, setColor] = useState('blue'); // Default color changed to blue

  const vehicleColors = {
    blue: maxBlue,
    red: maxYellow,
    black: maxBlack,
  };

  return (
    <div className="vehicle-container">
      <img src={vehicleColors[color]} alt="Rhyno EV" className="vehicle-image" />
      <div className="button-container">
        <Button color="info" onClick={() => setColor('blue')}>Blue</Button> {/* Using Bootstrap's info color */}
        <Button color="warning" onClick={() => setColor('red')}>yellow</Button>
        <Button color="dark" onClick={() => setColor('black')}>red</Button>
      </div>
    </div>
  );
}

export default VehicleColor2;
