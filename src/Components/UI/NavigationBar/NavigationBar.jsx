import React, { useContext } from 'react';

import classes from './NavigationBar.module.css';

import Button from '../../Reusable components/Button/Button.jsx';
import addToCartCtx from '../../context/add-to-cart-context';
const NavigationBar = ({ onBasketClick }) => {
  const atc = useContext(addToCartCtx);

  const count = atc.basket.reduce((acc, cur) => {
    return (acc += cur.basketCount);
  }, 0);

  return (
    <div className={classes.header}>
      <h1 className='company-name'>ReactMeals</h1>
      <Button className={classes.checkoutBtn} onClick={onBasketClick}>
        <img className={classes.cartIcon}></img>
        <span className={classes.cartText}>Your cart</span>
        <span className={classes.itemCounter}>{count}</span>
      </Button>
      {/* when clicked display the cart modal*/}
    </div>
  );
};

export default NavigationBar;
