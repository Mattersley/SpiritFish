import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../components - UI/Button/Button';
// @ts-ignore
import classes from './NavigationItems.module.css';

import Aux from '../../../../hoc/Aux/Aux';
import Burger from '../../components - UI/Burger/Burger';

interface Props {
    isAuthenticated: boolean,
    width: number
}

const NavigationItems = ({ isAuthenticated, width }: Props) => {
  const [isBurger, setIsBurger] = useState(false);

  useEffect(() => {
    if (width <= 680) {
      setIsBurger(true);
    } else if (width >= 681) {
      setIsBurger(false);
    }
  }, [width]);

  if (!isBurger) {
    return (
      <Aux>
        <ul className={classes.NavItems}>
          <li className={classes.NavItem}>
            <Link to="/distilleries">
              distilleries
            </Link>
          </li>
          <li className={classes.NavItem}>
            <Link to="/products">
              products
            </Link>
          </li>
          <li className={classes.NavItem}>
            <Link to="/cocktails">
              cocktails
            </Link>
          </li>
          <li className={classes.NavItem}>
            <Link to="/stores">
              stores
            </Link>
          </li>
          <li className={classes.NavItem}>
            <Link to="/news">
              news
            </Link>
          </li>
        </ul>
        {isAuthenticated ? (
          <Aux>
            <div className={classes.authenticatedButtonContainer}>
              <Link className={classes.NavItem} to="/account">
                <div className={classes.settingsButton}>
                  <FontAwesomeIcon
                    className={classes.hoverText}
                    icon={faCog}
                  />
                </div>
              </Link>
              <Link to="/logout">
                <Button otherClasses={classes.authButton} btnType="Danger">Log Out</Button>
              </Link>
            </div>
          </Aux>
        )
          : (
            <div className={classes.authenticatedButtonContainer}>
              <Link to="/auth">
                <Button otherClasses={classes.authButton} btnType="Success">Log In</Button>
              </Link>
            </div>
          )}
      </Aux>
    );
  }
  return (<Burger />);
};

// TODO: Iterate over lists to produce navigation

export default NavigationItems;
