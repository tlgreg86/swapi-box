import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card'
import './CardList.css';

const CardList = ({ data, selectedTab, handleFavorites }) => {
  let cardListContent;

  if (data.length) {
    cardListContent =
      <div className={'inner-card-container'}>
        {data.map( (article, index) =>
          <Card key={index}
                article={article}
                handleFavorites={handleFavorites} />
        )}
        <div className='fix-flex-orphans'></div>
        <div className='fix-flex-orphans'></div>
        <div className='fix-flex-orphans'></div>
        <div className='fix-flex-orphans'></div>
        <div className='fix-flex-orphans'></div>
        <div className='fix-flex-orphans'></div>
        <div className='fix-flex-orphans'></div>
        <div className='fix-flex-orphans'></div>
      </div>
  } else {
    cardListContent = selectedTab !== 'FAVORITES' ? 
      <img className='loader' src='./loader.gif' alt='Loading...' /> :
      <div className='yoda-talk'>
        <p>No favorites, you have.</p>
        <p>Add some favorites, you must!</p>
        <p>Yes, hmmm.</p>
      </div>;
  }

  return (
    <div className={`card-list ${selectedTab.toLowerCase()}`}>
      { cardListContent }
    </div>
  );
}

CardList.propTypes = {
  data: PropTypes.array,
  selectedTab: PropTypes.string,
  handleFavorites: PropTypes.func
}

export default CardList;
