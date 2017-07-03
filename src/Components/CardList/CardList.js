import React from 'react';
import Card from '../Card/Card'
import './CardList.css';

const CardList = () => {
  return (
    <div className='card-list'>
      <Card name={'Luke Skywalker'}
            homeworld={'Tattoine'}
            species={'Human'}
            population={'150000'}/>
      <Card name={'Tattoine'}
            terrain={'rough'}
            population={'150000'}
            climate={'dry'}
            residents={'Luke Skywalker'}/>
      <Card name={'AT-AT'} 
            model={'F-150'}
            class={'pickup'}
            numPassengers={'8'}/>
    </div>
  );
}

export default CardList;
