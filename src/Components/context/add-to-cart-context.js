import React, { useState, useContext, useReducer } from 'react';

import DumContext from './dummy-context';

const basketReducer = (state, action) => {
  if (action.type === 'INPUT_CHANGE') {
    return { basket: state.basket, itemCount: action.itemCount };
  }
  if (action.type === 'BASKET_UPDATE') {
    return { basket: action.basket, itemCount: state.itemCount };
  }
  return { basket: [], itemCount: 0 };
};

const addToCartCtx = React.createContext({
  addHandler: () => {},
  inputChangeHandler: () => {},
  itemCount: 0,
  basket: [],
});

export const ATCProvider = (props) => {
  const [basketState, dispatchBasket] = useReducer(basketReducer, {
    basket: [],
    itemCount: 0,
  });

  const { meal } = useContext(DumContext);
  //   const [basket, setBasket] = useState([]);

  //   const [itemCount, setItemCount] = useState(0);

  const inputChangeHandler = (e) => {
    // setItemCount(e.target.value);
    dispatchBasket({ type: 'INPUT_CHANGE', itemCount: e.target.value });
  };

  const addHandler = (e) => {
    const mTA = meal.find((item) => item.id === e.target.value);
    mTA.basketCount = +basketState.itemCount;
    const filterTempBasket = new Set([...basketState.basket, mTA]);
    const bTA = [...filterTempBasket];
    // setBasket((prevSnapshot) => bTA);
    dispatchBasket({
      type: 'BASKET_UPDATE',
      basket: bTA,
    });
  };

  return (
    <addToCartCtx.Provider
      value={{
        addHandler: addHandler,
        inputChangeHandler: inputChangeHandler,
        basket: basketState.basket,
        itemCount: basketState.itemCount,
      }}
    >
      {props.children}
    </addToCartCtx.Provider>
  );
};

export default addToCartCtx;
