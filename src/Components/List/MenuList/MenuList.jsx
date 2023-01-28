import React, { useContext, useState } from 'react';

import classes from './MenuList.module.css';

import Button from '../../Reusable components/Button/Button';

import Input from '../../Reusable components/Input/Input';

import addToCartCtx from '../../context/add-to-cart-context';
import { propNames } from '@chakra-ui/react';

const MenuList = ({ id, name, description, price }) => {
  const atc = useContext(addToCartCtx);

  return (
    <div className={classes.itemContainer}>
      <li className={classes.menuItem}>
        <h2>{name}</h2>
        <p>{description}</p>
        <span className='price'>${price}</span>
      </li>
      <div className={classes.userOperationContainer}>
        <span className={classes.orderAmount}>
          <p>Amount</p>{' '}
          <Input
            input={{
              id: 'amount_' + { id },
              type: 'number',
              placeholder: '0',
              onChange: atc.inputChangeHandler,
            }}
            // placeholder='0' onChange={atc.inputChangeHandler}
          />
        </span>
        <Button className='btn-atc' value={id} onClick={atc.addHandler}>
          + Add
        </Button>
      </div>
    </div>
  );
};

export default MenuList;
