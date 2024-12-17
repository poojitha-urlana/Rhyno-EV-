import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FaAndroid, FaApple } from 'react-icons/fa';
import './RentalOptions.css';

const Rentals = () => {
  return (
    <Container className="rental-options-container">
      <h2 className="rental-options-title">Explore the Roars of Rhyno at Your Own Pace</h2>
      <Row>
        <Col>
          <h3 className="rental-options-subtitle">Rentals</h3>
          <p className="rental-options-description">
            Test the waters with our flexible rental model, available for a week or a month,
            allowing you to experience the Rhyno first hand before committing.
            Simply visit our authorized dealerships to unlock this opportunity.
          </p>
          <p className="rental-options-description">
            Our Rhyno EVs are designed to provide a superior driving experience with cutting-edge technology, exceptional range, and top-notch safety features.
            With zero emissions and low maintenance costs, our vehicles are not only environmentally friendly but also economical.
          </p>
          
          <strong className="rental-options-section-title">Rental Options</strong>
          <ul className="rental-options-list">
            <li className="rental-options-list-item"><strong>Weekly Rental:</strong> Allows you to test the Rhyno EV for a shorter period, ideal for those who want a brief experience before making a decision.</li>
            <li className="rental-options-list-item"><strong>Monthly Rental:</strong> Provides a more extended trial period, giving you ample time to fully experience the benefits and performance of the Rhyno EV.</li>
          </ul>
          
          <strong className="rental-options-section-title">Key Features of Rhyno EV Rentals</strong>
          <ul className="rental-options-list">
            <li className="rental-options-list-item"><strong>Cutting-Edge Technology:</strong> Experience the latest in EV technology, including advanced battery systems, smart connectivity, and innovative driving features.</li>
            <li className="rental-options-list-item"><strong>Exceptional Range:</strong> Long-range battery life suitable for both city commutes and long-distance travel.</li>
            <li className="rental-options-list-item"><strong>Top-Notch Safety:</strong> Equipped with advanced safety features such as collision avoidance, lane-keeping assist, and more.</li>
            <li className="rental-options-list-item"><strong>Comfort and Convenience:</strong> Spacious interiors, smart connectivity, and user-friendly controls for a comfortable ride.</li>
            <li className="rental-options-list-item"><strong>Environmental and Economic Benefits:</strong> Zero emissions and low maintenance costs make Rhyno EVs both environmentally friendly and economical.</li>
          </ul>
          
          <strong className="rental-options-section-title">Additional Benefits</strong>
          <ul className="rental-options-list">
            <li className="rental-options-list-item"><strong>Smooth and Quiet Ride:</strong> Instant torque and superior handling for an enjoyable driving experience.</li>
            <li className="rental-options-list-item"><strong>Authorized Service Centers:</strong> Access to a network of authorized service centers for hassle-free maintenance.</li>
            <li className="rental-options-list-item"><strong>Flexible Rental Terms:</strong> Options to extend rental periods based on your needs.</li>
          </ul>
          
          <strong className="rental-options-section-title">How to Rent a Rhyno EV</strong>
          <ul className="rental-options-list">
            <li className="rental-options-list-item"><strong>Download the Rental App:</strong> Available on the App Store and Google Play.</li>
            <li className="rental-options-list-item"><strong>Create an Account:</strong> Sign up and verify your identity.</li>
            <li className="rental-options-list-item"><strong>Choose Your Rental Period:</strong> Select a rental period that suits your needs.</li>
            <li className="rental-options-list-item"><strong>Select a Vehicle:</strong> Choose a Rhyno EV from the available fleet.</li>
            <li className="rental-options-list-item"><strong>Pick Up or Delivery:</strong> Pick up the vehicle from a nearby authorized dealership or opt for delivery to your location.</li>
            <li className="rental-options-list-item"><strong>Enjoy Your Drive:</strong> Drive the Rhyno EV during your rental period. You can return it at the end of the period or extend your rental through the app.</li>
          </ul>
          
          <p className="rental-options-description">
            Additionally, we're redefining campus commuting with our rental fleet tailored for college students.
            Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app.
            Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.
          </p>
          
          <div className="rental-options-download-buttons">
            <Button className="rental-options-download-button rental-options-download-button-primary">
              <FaAndroid className="rental-options-icon" /> Android
            </Button>
            <Button className="rental-options-download-button rental-options-download-button-secondary">
              <FaApple className="rental-options-icon" /> Apple
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Rentals;
