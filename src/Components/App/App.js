import React, { Component } from 'react';
import Scroll from '../Scroll/Scroll';
import ButtonList from '../ButtonList/ButtonList';
import CardList from '../CardList/CardList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Scroll />
        <div className='list-container'>
          <ButtonList />
          <CardList />
        </div>
      </div>
    );
  }
}

export default App;
