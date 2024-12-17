import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import vehicleImage1 from '../assets/vehicle1.png';
import vehicleImage2 from '../assets/vehicle2.png';
import vehicleImage3 from '../assets/vehicle3.png';
import lfpBatteryImage from '../assets/LFPBattery.jpg';
import widerTyresImage from '../assets/motor.jpg';
import rangePredictionImage from '../assets/range-prediction.jpg';
import extraordinaryExperienceImage from '../assets/ExtraordinaryExperience.jpg';
import ruggedDesignImage from '../assets/RuggedandSimple Design (2).jpg';

import './HomePage.css';

function HomePage() {
    // Dark mode
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = JSON.parse(localStorage.getItem('darkMode'));
        if (savedMode) {
            setDarkMode(savedMode);
        }
    }, []);

    // Changing word effect
    const words = ["Style", "Elegance", "Minimalism", "Comfort"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedWord, setDisplayedWord] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const word = words[currentWordIndex];
        const interval = setInterval(() => {
            if (charIndex < word.length) {
                setDisplayedWord(prev => prev + word[charIndex]);
                setCharIndex(prev => prev + 1);
            }
        }, 200); // Adjust the speed here

        if (charIndex === word.length) {
            clearInterval(interval);
            setTimeout(() => {
                setCharIndex(0);
                setDisplayedWord("");
                setCurrentWordIndex(prev => (prev + 1) % words.length);
            }, 2000); // Adjust the pause between words here
        }

        return () => clearInterval(interval);
    }, [charIndex, currentWordIndex, words]);

    // Intersection observer for animations
    useEffect(() => {
        const elements = document.querySelectorAll('.vehicle-item, .feature');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-' + entry.target.dataset.animation);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => {
            observer.observe(el);
        });

        return () => {
            elements.forEach(el => {
                observer.unobserve(el);
            });
        };
    }, []);

    return (
        <div className={`homepage ${darkMode ? 'dark-mode' : ''}`}>
            <section className="frontline">
                <h1>Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets....
                    <span id="changing-word"> {displayedWord}</span>.
                </h1>
            </section>

            <section className="vehicles">
                <div className="vehicle-item" data-animation="left">
                    <img src={vehicleImage1} alt="Vehicle 1" />
                    <Link to="/product/se03-lite">
                    <button className="product-button">Check Out SE03 Lite</button></Link>
                </div>
                <div className="vehicle-item" data-animation="right">
                    <img src={vehicleImage2} alt="Vehicle 2" />
                    <Link to="/product/se03">
                    <button className="product-button">Check Out SE03</button></Link>
                </div>
                <div className="vehicle-item" data-animation="bottom">
                    <img src={vehicleImage3} alt="Vehicle 3" />
                    <Link to="/product/se03-max">
                    <button className="product-button">Check Out SE03 Max</button></Link>
                </div>
            </section>

            <section className="usp-carousel">
                <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
                    <div className="usp-item">
                        <img src={lfpBatteryImage} alt="LFP Battery" />
                        <h2>LFP Battery</h2>
                        <p>Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances Rhyno's longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards. But it doesn't stop there—our technology goes the extra mile in ensuring the battery's lasting durability. Connect with us to discover the thoughtful engineering behind our batteries!</p>
                    </div>
                    <div className="usp-item">
                        <img src={widerTyresImage} alt="Wider Tyres" />
                        <h2>Wider Tyres</h2>
                        <p>Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand.</p>
                    </div>
                    <div className="usp-item">
                        <img src={rangePredictionImage} alt="Range Prediction" />
                        <h2>Range Prediction</h2>
                        <p>Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery.</p>
                    </div>
                    <div className="usp-item">
                        <img src={extraordinaryExperienceImage} alt="Extraordinary Experience" />
                        <h2>Extraordinary Experience</h2>
                        <p>Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity!</p>
                    </div>
                    <div className="usp-item">
                        <img src={ruggedDesignImage} alt="Rugged and Simple Design" />
                        <h2>Rugged and Simple Design</h2>
                        <p>We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, ending up spending weeks and months at service stations for complex repairs. We took a bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it. If you have reached this far, why not take a test ride? Click here to locate your nearest dealership or book a test ride at your home.</p>
                    </div>
                </Carousel>
            </section>

            

            <Link to="/pre-book">
                <button className="pre-book-button">Pre-Book Now</button>
            </Link>
        </div>
    );
}

export default HomePage;
