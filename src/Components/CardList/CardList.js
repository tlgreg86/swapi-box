import React from 'react';
import Card from '../Card/Card'
import './CardList.css';

const CardList = ({ peopleData }) => {
  return (
    <div className='card-list'>
      {peopleData.map((person, index) =>
        <Card key={index}
              name={person.name}
              homeworld={person.homeworld}
              species={person.species}
              population={person.population}/>
      )}
    </div>
  );
}

export default CardList;
