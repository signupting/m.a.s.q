import React from 'react';
import { Link } from 'react-scroll'; // Keep for potential future use
import styles from './FeatureSection.module.css';

const FeatureSection = () => {
  return (
    <section 
      id="feature" 
      className={styles.featureSection}
    >
      <p className={styles.overlayText}>
        Send. Mix. Vanish.
      </p>
      <button 
        className={styles.ctaButton}
        // onClick={() => alert('Try MASQ clicked!')} // Placeholder action
      >
        Try MASQ Now
      </button>
    </section>
  );
};

export default FeatureSection; 