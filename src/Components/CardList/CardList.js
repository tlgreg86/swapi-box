import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card'
import './CardList.css';

const CardList = ({ data, selectedTab, handleFavorites }) => {
  console.log(selectedTab);
  let cardListContent;
  let yodaTalk = selectedTab === 'FAVORITES' ?
    <div className='yoda-talk'>No favorites, you have. Add some favorites, you must! Yes, hmmm.</div> :
    <div></div>;

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
    cardListContent = <img className='loader' src='./loader.gif' alt='Loading...' />
  }

  return (
    <div className={`card-list ${selectedTab.toLowerCase()}`}>
      { yodaTalk }
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
