import React from 'react';

import classes from './BottleView.module.css';
import whiteFishLogo from '../../../../assets/images/Logos/SpiritFishDeadFishLogoWhite.png';
import Tagline from '../../components - UI/Tagline/Tagline';

interface BottleViewProps {
    children: React.ReactNode,
    leftViewRef: any
}

const BottleView = ({ children, leftViewRef }: BottleViewProps) => (
  <div className={classes.BottleView} ref={leftViewRef}>
    <div className={classes.bvHeader}>
      <img className={classes.whiteLogo} src={whiteFishLogo} alt="Deadfish SpiritFish Logo White" />
      <hr className={classes.whiteLine} />
    </div>
    <div className={classes.bvContent}>
      {children}
    </div>
  </div>
);

export default BottleView;
