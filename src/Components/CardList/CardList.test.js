import React from 'react';
import { shallow, mount } from 'enzyme';
import CardList from './CardList';

describe('CardList tests', () => {
  it('should render a div with className "card-list"', () => {
    let component = shallow(<CardList />);
    
    const cardList = component.find('.card-list');
    
    expect(cardList).toHaveLength(2); //1
  });

  it('should render a card for each Person in state', () => {
    let people = [ { name: 'A', homeworld: 'B', species: 'C', population: 1},
      { name: 'D', homeworld: 'E', species: 'F', population: 2},
      { name: 'G', homeworld: 'H', species: 'I', population: 3}];
    let component = shallow(<CardList peopleData={people}/>);
    
    const cards = component.find('.card'); // may need to add className to CardList?
    
    expect(cards).toHaveLength(4); //3
  });
  
  it('should render a card for each Planet in state', () => {
    let planets = [
      { name: 'A', terrain: 'B', population: 'C', climate: 1, residents: 'J'},
      { name: 'D', terrain: 'E', population: 'F', climate: 2, residents: 'K'},
      { name: 'G', terrain: 'H', population: 'I', climate: 3, residents: 'L'}
    ];
    let component = shallow(<CardList planetData={planets}/>);
    
    const cards = component.find('.card'); // may need to add className to CardList?
    
    expect(cards).toHaveLength(4); //3
  });
  
  it('should render a card for each Vehicle in state', () => {
    let vehicles = [
      { name: 'A', model: 'B', class: 'C', numPassengers: 1 },
      { name: 'D', model: 'E', class: 'F', numPassengers: 2 },
      { name: 'G', model: 'H', class: 'I', numPassengers: 3 }
    ];
    let component = shallow(<CardList vehiclesData={vehicles}/>);
    
    const cards = component.find('.card'); // may need to add className to CardList?
    
    expect(cards).toHaveLength(4); //3
  });
});