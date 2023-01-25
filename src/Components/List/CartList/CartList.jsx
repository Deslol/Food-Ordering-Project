import React from 'react';

import classes from './CartList.module.css';

const CartList = ({ name, description, price, id, basketCount }) => {
  return (
    <div className={classes.cartContainer}>
      <h2>{name}</h2>
      <li className={classes.cartItem}>
        <p>{description}</p>
        <span className='price'>${price}</span>

        <span className={classes.orderAmount}>
          <p>Amount</p>
        </span>
        <span>{basketCount}</span>
      </li>
    </div>
  );
};

export default CartList;
