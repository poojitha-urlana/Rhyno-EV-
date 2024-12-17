import React from 'react';
import BestChoice from '../components/bestchoise';
import Comparison from '../components/Comparison';
import ImageSlider from '../components/ImageSlider';

const CompareAll = () => {
  return (
    <div>
       <ImageSlider />
      {/* <h1>Compare All</h1> */}
      <Comparison />
      <BestChoice />
    </div>
  );
};

export default CompareAll;
