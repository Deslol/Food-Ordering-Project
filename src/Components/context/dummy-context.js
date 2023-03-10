import React, { useState } from 'react';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const DumContext = React.createContext(DUMMY_MEALS);

export const DumContextProvider = (props) => {
  const [meal, setMeal] = useState(DUMMY_MEALS);
  return (
    <DumContext.Provider value={{ meal: meal }}>
      {props.children}
    </DumContext.Provider>
  );
};

export default DumContext;
