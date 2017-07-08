import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './ButtonList.css';

const ButtonList = ({ selectedTab, handleClick, count }) => {
  return (
    <div className='button-list'>
      <Button value={'FAVORITES'}
              btnClass={'favorite-btn'}
              count={String(count)}
              selectedTab={selectedTab}
              handleClick={handleClick} />
      <Button value={'PEOPLE'}
              btnClass={'people-btn'}
              selectedTab={selectedTab}
              handleClick={handleClick} />
      <Button value={'PLANETS'}
              btnClass={'planets-btn'}
              selectedTab={selectedTab}
              handleClick={handleClick} />
      <Button value={'VEHICLES'}
              btnClass={'vehicles-btn'}
              selectedTab={selectedTab}
              handleClick={handleClick} />
    </div>
  );
}

ButtonList.propTypes = {
  selectedTab: PropTypes.string,
  handleClick: PropTypes.func,
  count: PropTypes.number
}

export default ButtonList;
