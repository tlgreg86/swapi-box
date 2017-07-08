import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ article, handleFavorites }) => {
  let { name,
        homeworld,
        species,
        population,
        terrain,
        climate,
        residents,
        model,
        vehicleClass,
        numPassengers,
        favorited } = article;

  let favoritedClass = favorited ? 'favorited' : '';

  return (
    <div className='card'>
      <h2 className='card-title name'>{name}</h2>
      { homeworld && <div><h3 className='card-section-title'>Homeworld</h3><p className='homeworld'>{homeworld}</p></div> }
      { species && <div><h3 className='card-section-title'>Species</h3><p className='species'>{species}</p></div> }
      { population && <div><h3 className='card-section-title'>Population</h3><p className='population'>{population}</p></div> }
      { terrain && <div><h3 className='card-section-title'>Terrain</h3><p className='terrain'>{terrain}</p></div> }
      { climate && <div><h3 className='card-section-title'>Climate</h3><p className='climate'>{climate}</p></div> }
      { residents && <div><h3 className='card-section-title'>Notable Residents</h3><p className='residents'>{residents}</p></div> }
      { model && <div><h3 className='card-section-title'>Model</h3><p className='model'>{model}</p></div> }
      { vehicleClass && <div><h3 className='card-section-title'>Class</h3><p className='vehicle-class'>{vehicleClass}</p></div> }
      { numPassengers && <div><h3 className='card-section-title'>Number of Passengers</h3><p className='num-passengers'>{numPassengers}</p></div> }
      <div className={`fav-icon ${favoritedClass}`} onClick={() => handleFavorites(article)}></div>
    </div>
  );
 }

Card.propTypes = {
  article: PropTypes.object,
  handleFavorites: PropTypes.func
 }

export default Card;
