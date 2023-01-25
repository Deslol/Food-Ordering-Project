import React, { useState, useContext } from 'react';

import DumContext from './dummy-context';

const addToCartCtx = React.createContext({
  addHandler: () => {},
  inputChangeHandler: () => {},
  itemCount: 0,
  basket: [],
});

export const ATCProvider = (props) => {
  const { meal } = useContext(DumContext);
  const [basket, setBasket] = useState([]);

  const [itemCount, setItemCount] = useState(0);

  const inputChangeHandler = (e) => {
    setItemCount(e.target.value);
  };

  const addHandler = (e) => {
    const mTA = meal.find((item) => item.id === e.target.value);
    mTA.basketCount = +itemCount;
    const filterTempBasket = new Set([...basket, mTA]);
    const bTA = [...filterTempBasket];
    setBasket((prevSnapshot) => bTA);
  };

  return (
    <addToCartCtx.Provider
      value={{
        addHandler: addHandler,
        inputChangeHandler: inputChangeHandler,
        basket: basket,
        itemCount: itemCount,
      }}
    >
      {props.children}
    </addToCartCtx.Provider>
  );
};

export default addToCartCtx;
