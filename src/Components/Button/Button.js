import React, { Component } from 'react';
import './Button.css';

const Button = ({ value, btnClass, count }) => {
  return (
    <button className={btnClass}>
      {value}
      {count && <span className='favorite-count'>{count}</span>}
    </button>
  );
}

export default Button;
