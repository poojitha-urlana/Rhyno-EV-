// src/styles/ContactStyles.js

import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #FAFAFA;
  color: #424242;
  font-family: 'Lato', sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ContactHeading = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  color: #2C2A2A;
  margin-bottom: 1rem;
`;

export const ContactDetails = styled.div`
  background-color: #FFFFFF;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

export const DetailItem = styled.p`
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #414141;
`;

export const Highlight = styled.span`
  font-weight: bold;
  color: #F9ED32;
`;

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F2F2F2;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #3C3C3C;

  &:before {
    content: '✓';
    color: #F9ED32;
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`;
