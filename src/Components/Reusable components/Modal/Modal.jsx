import React, { useContext, Fragment } from 'react';

import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

import CartList from '../../List/CartList/CartList';
import addToCartCtx from '../../context/add-to-cart-context';
import Button from '../Button/Button';

const BackDrop = (props) => {
  return <div className={classes.backdrop} />;
};

const Modal = (props) => {
  const atc = useContext(addToCartCtx);

  const totalPrice = atc.basket.reduce((acc, cur) => {
    return (acc += cur.basketCount * cur.price);
  }, 0);

  const portalEl = document.getElementById('overlays');

  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, portalEl)}
      <div className={classes.modal}>
        <button onClick={props.onClose} className={classes.btnClose}>
          x Close
        </button>
        <h1 className={classes.orderSummary}>Order Summary</h1>
        <div className={classes.cartList}>
          {atc.basket.map((item) => (
            <CartList
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              basketCount={item.basketCount}
              id={item.id}
            />
          ))}
        </div>

        <div className={classes.priceContainer}>
          <h3>Total price:</h3>
          <h2>${totalPrice.toFixed(2)}</h2>
        </div>

        <Button>Checkout</Button>
      </div>
    </>
  );
};

export default Modal;
