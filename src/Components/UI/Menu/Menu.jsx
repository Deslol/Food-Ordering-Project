import React, { useContext } from 'react';

import classes from './Menu.module.css';

import MenuList from '../../List/MenuList/MenuList';
import DumContext from '../../context/dummy-context';

import Card from '../../Reusable components/Card/Card';

const Menu = () => {
  const { meal } = useContext(DumContext);
  console.log(meal);
  return (
    <div className={classes.menuContainer}>
      <ul className={classes.menuList}>
        {/* list-item (map)*/}
        {meal.map(({ id, name, description, price, basketCount }) => (
          <MenuList
            key={id}
            id={id}
            name={name}
            description={description}
            price={price}
            basketCount={basketCount}
          />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
