import React, { useState } from 'react';
import { Button } from 'reactstrap';
import maxRed from '../assets/maxred.png';
import maxYellow from '../assets/maxyellow.png';
import maxBlack from '../assets/maxblack.png';
import './color1.css';

const Vehicle = () => {
  const [color, setColor] = useState('red');

  const vehicleColors = {
    red: maxRed,
    yellow: maxYellow,
    black: maxBlack,
  };

  return (
    <div className="vehicle-container">
      <img src={vehicleColors[color]} alt="Rhyno EV" className="vehicle-image" />
      <div className="button-container">
        <Button color="danger" onClick={() => setColor('red')}>Red</Button>
        <Button color="warning" onClick={() => setColor('yellow')}>Yellow</Button>
        <Button color="dark" onClick={() => setColor('black')}>Black</Button>
      </div>
    </div>
  );
}

export default Vehicle;
