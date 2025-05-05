import React from 'react';
import styles from './HowItWorksSection.module.css';

// Placeholder Icon component (can be replaced with actual icons later)
const PlaceholderIcon = () => <div className={styles.stepIcon}>?</div>;

const HowItWorksSection = () => {
  const steps = [
    { id: 1, title: 'Wallet', description: 'Connect securely via Phantom/Solana.', icon: <PlaceholderIcon /> },
    { id: 2, title: 'Deposit', description: 'Funds enter the MASQ engine.', icon: <PlaceholderIcon /> },
    { id: 3, title: 'Mixing', description: 'MASQ scrambles & shields your identity.', icon: <PlaceholderIcon /> },
    { id: 4, title: 'Clean Output', description: 'Funds reappear, unlinkable.', icon: <PlaceholderIcon /> },
  ];

  return (
    <section 
      id="how-it-works" 
      className={styles.howItWorksSection}
    >
      <h2 className={styles.title}>How MASQ Works</h2>
      <div className={styles.infographicContainer}>
        {steps.map(step => (
          <div key={step.id} className={styles.step}>
            {step.icon}
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
      {/* Connecting line animation would be added here later */}
    </section>
  );
};

export default HowItWorksSection; 