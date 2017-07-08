import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ value, btnClass, count, handleClick, selectedTab }) => {
  const activeClass = selectedTab.substring(0, 9) === value.substring(0, 9) ? 
    'active' : '';

  return (
    <button className={`${btnClass} ${activeClass}`} onClick={handleClick}>
      { value }
      { count && <div className='favorite-count'>{count}</div> }
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string,
  btnClass: PropTypes.string,
  count: PropTypes.string,
  handleClick: PropTypes.func,
  selectedTab: PropTypes.string
}

export default Button;
