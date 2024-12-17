import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <Container className="privacy-policy">
      <Row>
        <Col>
          <h1>Privacy Policy</h1>
          <h2>Introduction</h2>
          <p>
            Welcome to Rhyno EV. We value your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>

          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <ul>
            <li><strong>Contact Details:</strong> Name, email address, phone number.</li>
            <li><strong>Identity Information:</strong> Driver’s license, government-issued ID.</li>
            <li><strong>Payment Information:</strong> Credit card details, billing address.</li>
          </ul>

          <h3>Non-Personal Information</h3>
          <ul>
            <li><strong>Technical Data:</strong> IP address, browser type, operating system.</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent on the site, navigation paths.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the collected data to:</p>
          <ul>
            <li>Provide and manage your rental experience.</li>
            <li>Process payments and manage transactions.</li>
            <li>Improve our website and services.</li>
            <li>Send promotional materials and updates (with your consent).</li>
          </ul>

          <h2>Data Sharing and Disclosure</h2>
          <p>We may share your information with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Third-party companies that perform services on our behalf.</li>
            <li><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, sale, or transfer of assets.</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and update your personal information.</li>
            <li>Request the deletion of your data.</li>
            <li>Withdraw consent for data processing.</li>
          </ul>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies to enhance your experience on our website. You can control cookie settings through your browser.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on our website.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions or concerns about this privacy policy, please contact us at:</p>
          <ul>
            <li><strong>Email:</strong> privacy@rhyno-ev.com</li>
            <li><strong>Phone:</strong> +1 (800) 123-4567</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;
