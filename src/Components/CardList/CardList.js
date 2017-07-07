import React from 'react';
import Card from '../Card/Card'
import './CardList.css';

const CardList = ({ data, selectedTab, handleFavorites }) => {
  return (
    <div className={'card-list ' + selectedTab.toLowerCase()}>
      {data.map((article, index) =>
        <Card key={index}
              article={article}
              handleFavorites={handleFavorites} />
      )}
    </div>
  );
}

export default CardList;
