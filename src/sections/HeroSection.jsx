import React from 'react';
import { Link } from 'react-scroll'; // Import for smooth scrolling
import styles from './HeroSection.module.css'; // Import CSS module

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className={styles.heroSection} // Use class from CSS module
      style={{
        height: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // Background will be set via CSS later using hero-bg.png
        backgroundImage: 'url(/backgrounds/hero-bg.png)', // Using the path you provided
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white' // Ensure text is visible over dark background
      }}
    >
      {/* Text is embedded in the image, so no h1 needed here */}
      {/* CTA Button */}
      <Link 
        to="how-it-works" // ID of the target section
        smooth={true} 
        duration={500} 
        spy={true} // Optional: highlights link when section is active
        offset={-70} // Optional: adjust scroll position (e.g., for fixed header)
        className={styles.ctaButton} // Use class from CSS module
      >
        Enter MASQ
      </Link>
      {/* Optional subtext */}
      <p className={styles.subtext}> {/* Use class from CSS module */}
        Anonymous. Secure. Solana-powered.
      </p>
    </section>
  );
};

export default HeroSection; 