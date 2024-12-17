import React, { useState } from 'react';
import './About.css';

import companyImage from '../assets/company-image.png';
import vehicleImage1 from '../assets/vehicle1.png';
import vehicleImage2 from '../assets/vehicle2.png';
import vehicleImage3 from '../assets/vehicle3.png';
import heroVideo from '../assets/video.mp4'; // Ensure you have the video file
import img3 from '../assets/maxblack.png';
import img4 from '../assets/rugged-design.png';
import img5 from '../assets/rhyno9.png';
import img6 from '../assets/final design try 2 cross view.178.png';
import img7 from '../assets/maxyellow.png';

const vehicleImages = [vehicleImage1, vehicleImage2, vehicleImage3,img7,img3, img4, img5, img6];

const AboutUs = () => {
  const [fullImg, setFullImg] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const openFullImg = (index) => {
    setFullImg(vehicleImages[index]);
    setCurrentImgIndex(index);
  };

  const closeFullImg = () => {
    setFullImg(null);
  }

  const showPrevImg = () => {
    const prevIndex = (currentImgIndex - 1 + vehicleImages.length) % vehicleImages.length;
    setFullImg(vehicleImages[prevIndex]);
    setCurrentImgIndex(prevIndex);
  };

  const showNextImg = () => {
    const nextIndex = (currentImgIndex + 1) % vehicleImages.length;
    setFullImg(vehicleImages[nextIndex]);
    setCurrentImgIndex(nextIndex);
  };

  return (
    <div className="about-us">
     
      <main className="main-content">
      <video className="hero-video" autoPlay loop muted>
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        <section className="hero-section">
        
          <div className="hero-content">
            <h1>About Us</h1>
            <p className="background-text">RHYNO EV</p>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>To provide the best electric vehicle experience to our customers, while ensuring a safe and dependable product.</p>
          <img src={companyImage} alt="Company" />
          <p>
            Established in 2019 by an automotive engineer with a vision for sustainable and robust mobility solutions,
            Rhyno EV is not just a company; it's a collective effort of a dynamic team of young individuals passionately
            driving innovation in the electric vehicle industry. We believe in engineering solutions that solve problems.
          </p>
          <p>
            With our first product, we've taken a bold step to create something more than just a vehicle; it's a unique
            experience of elegance, comfort, and style, addressing the pitfalls of conventional electric scooters. Our
            design prioritizes safety, eliminating concerns of fires and ensuring a longer battery lifespan with our
            battery technology. Perfectly suited for fleet operators, especially in tourist-centric locations like Goa,
            our rugged yet aesthetically appealing scooters are engineered for longevity and reliability.
          </p>
          <p>Join us as we pioneer a new era in sustainable and dependable electric transportation.</p>
        </section>

        <section className="gallery-section">
          <h2>Our Vehicles</h2>
          <div className="img-gallery">
            {vehicleImages.map((image, index) => (
              <div className="img-container" key={index}>
                <img src={image} alt={`Vehicle ${index + 1}`} onClick={() => openFullImg(index)} />
              </div>
            ))}
          </div>
        </section>
        
        <section className="opportunity-section">
          <h2>Opportunity</h2>
         
          <p>
            The rapid growth of megacities has created an exciting opportunity to radically rethink and reshape our
            world. Rhyno EV is starting with the way people use, consume, and experience energy. By introducing smarter
            technologies to make energy consumption more meaningful, Rhyno EV will help move us all forward, faster.
          </p>
        </section>

        <section className="mission-section">
          <h2>Mission Statement</h2>
          <p>
            Pioneer the innovation of accessible electric fuel and intelligent vehicles to provide us all a better way
            forward. From Rhyno EV's next-generation technology, advanced design and engineering to a fresh culture of
            creativity, we’re putting our focus into liberating energy to help power a new era of urban mobility. Rhyno
            EV is building the world’s most advanced, accessible, and intelligent energy platform, distribution network,
            smart batteries that will transform the way we use and share power.
          </p>
        </section>

        <section className="vision-section">
          <h2>Vision</h2>
         
          <p>
            Transforming Power to Create Positive Change, Rhyno EV believes smart energy is key to making cities
            smarter, more nimble, and more livable for everyone. Through radical design, engineering, and business
            thinking, Rhyno EV is turning the old fuel/vehicle paradigm upside down. Every advancement is aimed at
            creating more adaptable and sustainable energy systems while empowering a new generation to choose a
            cleaner, smarter future - now.
          </p>
        </section>

        {fullImg && (
          <div className="full-img" id="full-imgbox">
            <img src={fullImg} alt="Full" id="fullimg" />
            <span onClick={closeFullImg}>&times;</span>
            <div className="nav prev" onClick={showPrevImg}>&lt;</div>
            <div className="nav next" onClick={showNextImg}>&gt;</div>
          </div>
        )}
      </main>
    </div>
  );
}

export default AboutUs;
