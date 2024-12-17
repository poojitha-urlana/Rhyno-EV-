import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './RefundPolicy.css';

const RefundPolicy = () => {
  return (
    <Container className="refund-policy">
      <Row>
        <Col>
          <h1>Refund Policy</h1>
          <h2>Introduction</h2>
          <p>
            At Rhyno EV, we strive to ensure customer satisfaction with our products and services. This refund policy outlines the terms and conditions under which refunds may be granted.
          </p>

          <h2>Eligibility for Refunds</h2>
          <h3>Rental Services</h3>
          <ul>
            <li><strong>Cancellation:</strong> If you cancel your rental reservation at least 48 hours before the scheduled pick-up time, you will receive a full refund. Cancellations made less than 48 hours before the pick-up time are non-refundable.</li>
            <li><strong>Early Return:</strong> No refunds will be provided for early returns of rental vehicles.</li>
          </ul>

          <h3>Products</h3>
          <ul>
            <li><strong>Unused Products:</strong> If you are not satisfied with a product purchased from Rhyno EV, you may return the unused product in its original condition within 30 days of the purchase date for a full refund.</li>
            <li><strong>Damaged or Defective Products:</strong> If you receive a damaged or defective product, please contact our customer service team within 7 days of receipt to arrange for a replacement or refund.</li>
          </ul>

          <h2>Process for Requesting a Refund</h2>
          <ol>
            <li><strong>Contact Customer Service:</strong> Reach out to our customer service team at refunds@rhyno-ev.com or call +1 (800) 123-4567 to initiate a refund request.</li>
            <li><strong>Provide Necessary Information:</strong> You will need to provide your order number, details of the product or service, and the reason for the refund request.</li>
            <li><strong>Follow Instructions:</strong> Our customer service team will provide instructions on how to return the product (if applicable) and any additional steps required to process your refund.</li>
          </ol>

          <h2>Refund Processing</h2>
          <ul>
            <li><strong>Rental Services:</strong> Refunds for rental services will be processed within 7 business days after the cancellation has been confirmed.</li>
            <li><strong>Products:</strong> Refunds for returned products will be processed within 7 business days of receiving the returned item in its original condition.</li>
          </ul>

          <h2>Contact Us</h2>
          <p>If you have any questions or concerns about our refund policy, please contact us at:</p>
          <ul>
            <li><strong>Mail:</strong> info@rhyno.in</li>
            <li><strong>Mobile no.:</strong> +91-9023987528</li>
            <li><strong>Location:</strong> Rhyno Wheels Private Limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default RefundPolicy;
