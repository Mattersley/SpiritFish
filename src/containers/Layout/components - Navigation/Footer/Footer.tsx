import React from 'react';

import classes from './Footer.module.css';
import wisdomNMadnessLogo from '../../../../assets/images/Logos/WisdomAndMadnessLogo.png';

const Footer = () => (
  <div className={classes.Footer}>
    <p className={classes.footerLinks}>
      <a href="/">privacy</a>
      {' '}
      |
      {' '}
      <a href="/">terms</a>
      {' '}
      |
      {' '}
      <a href="/">support</a>
    </p>
    <p className={classes.copyright}>
      &copy; Wisdom & Madness Design Co.
      {' '}
      { new Date().getFullYear() }
      <a href="https://wisdomandmadness.wixsite.com/wisdomandmadness"><img src={wisdomNMadnessLogo} alt="Wisdom & Madness Design Co. Logo" /></a>
    </p>
  </div>
);

export default Footer;
