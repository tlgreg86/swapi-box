import React, { Component } from 'react';
import Button from '../Button/Button';
import './ButtonList.css';

const ButtonList = ({selectedTab, handleClick}) => {
  return (
    <div className='button-list'>
      <Button value={'FAVORITES'} 
              btnClass={'favorite-btn'} 
              count={'88'} 
              selectedTab={selectedTab}
              handleClick={handleClick}/>
      <Button value={'PEOPLE'} 
              btnClass={'people-btn'} 
              selectedTab={selectedTab}
              handleClick={handleClick}/>
      <Button value={'PLANETS'} 
              btnClass={'planets-btn'} 
              selectedTab={selectedTab}
              handleClick={handleClick}/>
      <Button value={'VEHICLES'} 
              btnClass={'vehicles-btn'} 
              selectedTab={selectedTab}
              handleClick={handleClick}/>
    </div>
  );
}

export default ButtonList;
