import React, { useContext } from 'react';

import classes from './NavigationBar.module.css';

import mealImg from '../../../assets/meals.jpeg';

import CartIcon from '../CartIcon/CartIcon';

import Button from '../../Reusable components/Button/Button.jsx';
import addToCartCtx from '../../context/add-to-cart-context';
const NavigationBar = ({ onBasketClick }) => {
  const atc = useContext(addToCartCtx);

  const count = atc.basket.reduce((acc, cur) => {
    return (acc += cur.basketCount);
  }, 0);

  return (
    <>
      <div className={classes.header}>
        <h1 className='company-name'>ReactMeals</h1>
        <Button className={classes.checkoutBtn} onClick={onBasketClick}>
          <CartIcon />
          <span className={classes.cartText}>Your cart</span>
          <span className={classes.badge}>{count}</span>
        </Button>
        {/* when clicked display the cart modal*/}
      </div>
      <div className={classes['main-image']}>
        <img src={mealImg} alt='A table of delicious food' />
      </div>
    </>
  );
};

export default NavigationBar;
