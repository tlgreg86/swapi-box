import React from 'react';
import { shallow, mount } from 'enzyme';
import CardList from './CardList';

describe('CardList tests', () => {
  it('should render a div with className "card-list"', () => {
    let component = shallow(<CardList />);
    const cardList = component.find('.card-list');
    expect(cardList).toHaveLength(1);
    // so I remember...
    expect(cardList).toHaveLength(2);
  });

  // it('should render a card for each Person in state')
  
  // it('should render a card for each Planet in state')
  
  // it('should render a card for each Vehicle in state')
  
});