import React from 'react';
import Card from '../Card/Card'
import './CardList.css';

const CardList = ({ peopleData }) => {
  console.log(peopleData);
  return (
    <div className='card-list'>
      {peopleData.map((person, index) =>
        <Card key={index}
              name={person.name}
              homeworld={person.homeworld}
              species={person.species}
              population={person.homeworld}/>
      )}

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
