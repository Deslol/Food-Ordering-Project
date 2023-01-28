import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  return (
    <input
      className={classes.inputField}
      // placeholder={props.placeholder}
      // onChange={props.onChange}
      {...props.input}
    >
      {props.children}
    </input>
  );
};

export default Input;
