import React from 'react';

import Aux from '../../../../hoc/Aux/Aux';
import classes from './Masonry.module.css';

const Masonry = () => (
  <Aux>
    <div className={classes.masonryParent}>
      <div className={classes.masonryBig}>
        <h5 className={classes.masonryHeading}>DISTILLERIES</h5>
      </div>
      <div className={classes.masonryCard}>
        <h5 className={classes.masonryHeading}>FEATURED COCKTAIL</h5>
      </div>

      <div className={classes.masonryCard}>
        <h5 className={classes.masonryHeading}>NEWS</h5>
      </div>

      <div className={classes.masonryCard}>
        <h5 className={classes.masonryHeading}>LIQUOR STORES</h5>
      </div>
    </div>
  </Aux>
);

export default Masonry;
