import React, { Component } from 'react';
import Scroll from '../Scroll/Scroll';
import ButtonList from '../ButtonList/ButtonList';
import CardList from '../CardList/CardList';
import { fetchPeople, fetchPlanets, fetchVehicles } from '../../utils/helper';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
      people: [],
      planets: [],
      vehicles: [],
      scroll: {},
      selectedTab: 'FAVORITES'
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleFavorites = this.handleFavorites.bind(this);
  }

  scrollCall() {
    const randomNum = Math.floor(Math.random() * (8 - 1)) + 1;
    fetch(`http://swapi.co/api/films/${randomNum}`)
      .then( response => response.json() )
      .then( scroll => {
        this.setState({ scroll: scroll })
      });
  }

  handleState(key, data) {
    this.setState({
      [key]: data
    })
  }

  handleClick(e) {
    this.setState({
      selectedTab: e.target.innerText.substring(0, 9)
    });
  }

  checkForDuplicates(article) {
    return this.state.favorites.indexOf(article);
  }

  handleFavorites(article) {
    const index = this.checkForDuplicates(article);
    const favoritesState = this.state.favorites;

    index === -1 ?
      favoritesState.push(article) : favoritesState.splice(index, 1)

    !article.favorited ?
      article.favorited = true : article.favorited = !article.favorited;
    this.handleState('favorites', favoritesState);
  }

  componentDidMount() {
    this.scrollCall();
    fetchPeople().then(data => this.handleState('people', data));
    fetchPlanets().then(data => this.handleState('planets', data));
    fetchVehicles().then(data => this.handleState('vehicles', data));
  }

  render() {
    let stateVar = this.state.selectedTab.toLowerCase();

    return (
      <div className='App'>
        <Scroll scroll={ this.state.scroll } />
        <div className='list-container'>
          <ButtonList selectedTab={ this.state.selectedTab }
                      handleClick={ this.handleClick }
                      count={ this.state.favorites.length } />
          <CardList data={ this.state[stateVar] }
                    selectedTab={ this.state.selectedTab }
                    handleFavorites={ this.handleFavorites } />
        </div>
      </div>
    );
  }
}

export default App;
