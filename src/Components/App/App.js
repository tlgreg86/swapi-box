import React, { Component } from 'react';
import Scroll from '../Scroll/Scroll';
import ButtonList from '../ButtonList/ButtonList';
import CardList from '../CardList/CardList';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      scroll: []
    }
  }

  scrollCall() {
    const randomNum = Math.floor(Math.random() * (8 - 1)) + 1;
    fetch(`http://swapi.co/api/films/${randomNum}`)
      .then( response => response.json() )
      .then( scroll => {
        this.setState({scroll: scroll})
      })
  }

  componentWillMount() {
    this.scrollCall()
  }

  render() {
    return (
      <div className='App'>
        <Scroll scroll={this.state.scroll}/>
        <div className='list-container'>
          <ButtonList />
          <CardList />
        </div>
      </div>
    );
  }
}

export default App;
