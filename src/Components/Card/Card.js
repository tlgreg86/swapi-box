import React from 'react';
import './Card.css';

const Card = ({ name,
                homeworld,
                species,
                population,
                terrain,
                climate,
                residents,
                model,
                vehicleClass,
                numPassengers }) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      {homeworld && <p>Homeworld: {homeworld}</p>}
      {species && <p>Species: {species}</p>}
      {population && <p>Population: {population}</p>}
      {terrain && <p>Terrain: {terrain}</p>}
      {climate && <p>Climate: {climate}</p>}
      {residents && <p>Residents: {residents}</p>}
      {model && <p>Model: {model}</p>}
      {vehicleClass && <p>Class: {vehicleClass}</p>}
      {numPassengers && <p>Number of Passengers: {numPassengers}</p>}
      <div className='fav-icon'></div>
    </div>
  );
}

export default Card;
