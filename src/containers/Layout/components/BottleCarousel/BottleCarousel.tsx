import React from 'react';

import classes from './BottleCarousel.module.css';
import Bottle1 from '../../../../assets/images/Products/SheringhamAkvavit.png';

const BottleCarousel = () => (
  <div className={classes.BottleCarousel}>
    <img className={classes.BottleImage} src={Bottle1} alt="Sheringham Akvavit Bottle" />
  </div>
);

export default BottleCarousel;
