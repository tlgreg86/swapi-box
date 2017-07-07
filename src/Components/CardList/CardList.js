import React from 'react';
import Card from '../Card/Card'
import './CardList.css';

const CardList = ({ data, selectedTab, handleFavorites }) => {
  return (
    <div className={'card-list ' + selectedTab.toLowerCase()}>
      {data.map((article, index) =>
        // <Card key={index}
        //       name={article.name}
        //       homeworld={article.homeworld}
        //       species={article.species}
        //       population={article.population}
        //       terrain={article.terrain}
        //       climate={article.climate}
        //       residents={article.residents}
        //       model={article.model}
        //       vehicleClass={article.vehicleClass}
        //       numPassengers={article.numPassengers}
        //       handleFavorites={handleFavorites}
        //       />
        <Card key={index} article={article} handleFavorites={handleFavorites}/>
      )}
    </div>
  );
}

export default CardList;
