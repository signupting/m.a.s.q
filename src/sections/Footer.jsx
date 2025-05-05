import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.linksContainer}>
        <a href="#" className={styles.footerLink}>Privacy Policy</a> |
        <a href="#" className={styles.footerLink}>GitHub</a> |
        <a href="#" className={styles.footerLink}>Telegram</a> |
        <a href="#" className={styles.footerLink}>X (Twitter)</a>
      </div>
      
      <div className={styles.bottomText}>
        {/* Replace span with <img> tag when logo is available */}
        <span className={styles.logoPlaceholder}></span> 
        © 2025 MASQ. No logs. No trace.
      </div>
    </footer>
  );
};

export default Footer; 