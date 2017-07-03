import React, { Component } from 'react';
import Button from '../Button/Button';
import './ButtonList.css';

const ButtonList = () => {
  
  
  return (
    <div className='button-list'>
      <Button value={'FAVORITES'} btnClass={'favorite-btn'} count={'88'} />
      <Button value={'PEOPLE'} btnClass={'people-btn'} />
      <Button value={'PLANETS'} btnClass={'planets-btn'} />
      <Button value={'VEHICLES'} btnClass={'vehicles-btn'} />
    </div>
  );
}

export default ButtonList;
