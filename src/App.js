import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PreBookingPage from './pages/PreBookingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import CompareAll from './pages/CompareAll';
import Rentals from './pages/Rentals';
import SE03LitePage from './pages/SE03LitePage';
import SE03Page from './pages/SE03Page';
import SE03MaxPage from './pages/SE03MaxPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import WebsitePolicy from './pages/WebsitePolicy';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
     

      <Route path="/product/se03-lite" element={<SE03LitePage />} />
        <Route path="/product/se03" element={<SE03Page />} />
        <Route path="/product/se03-max" element={<SE03MaxPage />} />
        <Route path="/compare" element={<CompareAll />} />
        <Route path="/pre-book" element={<PreBookingPage />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/rentals"  element={<Rentals />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/website-policy" element={<WebsitePolicy />} />
      </Routes>
<Footer />
    </BrowserRouter>
  );
}

export default App;
