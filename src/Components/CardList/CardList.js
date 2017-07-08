import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card'
import './CardList.css';

const CardList = ({ data, selectedTab, handleFavorites }) => {
  let cardListContent;
  if (data.length) {
    cardListContent = data.map((article, index) =>
    <Card key={ index }
          article={ article }
          handleFavorites={ handleFavorites } />
    )
  } else {
    cardListContent = <img src='./loader.gif' alt='Loading...' />
  }

  return (
    <div className={'card-list ' + selectedTab.toLowerCase()}>
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
