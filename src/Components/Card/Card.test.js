import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';

describe('Card tests', () => {
  it('should render a div with className "card"', () => {
    const wrapper = shallow(<Card article={{}} />);
    const card = wrapper.find('.card');
    
    expect(card).toHaveLength(1);
  });
  
  it('should render a Favorite icon', () => {
    const wrapper = shallow(<Card article={{}} />);
    const favoriteIcon = wrapper.find('.fav-icon');
    
    expect(favoriteIcon).toHaveLength(1);
  });
  
  it('should populate only Name, Homeworld, Species & Population for a Person', () => {
    const person = { name: 'A', homeworld: 'B', species: 'C', population: 'D'};
    const wrapper = shallow(<Card article={ person } />);
    
    const name = wrapper.find('.name');
    expect(name).toHaveLength(1);
    
    const homeworld = wrapper.find('.homeworld');
    expect(homeworld).toHaveLength(1);
    
    const species = wrapper.find('.species');
    expect(species).toHaveLength(1);
    
    const population = wrapper.find('.population');
    expect(population).toHaveLength(1);
    
    const terrain = wrapper.find('.terrain');
    expect(terrain).toHaveLength(0);
    
    const climate = wrapper.find('.climate');
    expect(climate).toHaveLength(0);
    
    const residents = wrapper.find('.residents');
    expect(residents).toHaveLength(0);
    
    const model = wrapper.find('.model');
    expect(model).toHaveLength(0);
    
    const vehicleClass = wrapper.find('.vehicle-class');
    expect(vehicleClass).toHaveLength(0);
    
    const numPassengers = wrapper.find('.num-passengers');
    expect(numPassengers).toHaveLength(0);
  });
  
  it('should populate only Name, Terrain, Population, Climate and Residents for a Planet', () => {
    const planet = { name: 'A', terrain: 'B', climate: 'C', population: 'D', residents: 'E'};
    const wrapper = shallow(<Card article={ planet } />);
    
    const name = wrapper.find('.name');
    expect(name).toHaveLength(1);
    
    const homeworld = wrapper.find('.homeworld');
    expect(homeworld).toHaveLength(0);
    
    const species = wrapper.find('.species');
    expect(species).toHaveLength(0);
    
    const population = wrapper.find('.population');
    expect(population).toHaveLength(1);
    
    const terrain = wrapper.find('.terrain');
    expect(terrain).toHaveLength(1);
    
    const climate = wrapper.find('.climate');
    expect(climate).toHaveLength(1);
    
    const residents = wrapper.find('.residents');
    expect(residents).toHaveLength(1);
    
    const model = wrapper.find('.model');
    expect(model).toHaveLength(0);
    
    const vehicleClass = wrapper.find('.vehicle-class');
    expect(vehicleClass).toHaveLength(0);
    
    const numPassengers = wrapper.find('.num-passengers');
    expect(numPassengers).toHaveLength(0);
  });
  
  it('should populate only Name, Model, Class & Number of Passengers for a Vehicle', () => {
    const vehicle = { name: 'A', model: 'B', vehicleClass: 'C', numPassengers: 'D'};
    const wrapper = shallow(<Card article={ vehicle } />);
    
    const name = wrapper.find('.name');
    expect(name).toHaveLength(1);
    
    const homeworld = wrapper.find('.homeworld');
    expect(homeworld).toHaveLength(0);
    
    const species = wrapper.find('.species');
    expect(species).toHaveLength(0);
    
    const population = wrapper.find('.population');
    expect(population).toHaveLength(0);
    
    const terrain = wrapper.find('.terrain');
    expect(terrain).toHaveLength(0);
    
    const climate = wrapper.find('.climate');
    expect(climate).toHaveLength(0);
    
    const residents = wrapper.find('.residents');
    expect(residents).toHaveLength(0);
    
    const model = wrapper.find('.model');
    expect(model).toHaveLength(1);
    
    const vehicleClass = wrapper.find('.vehicle-class');
    expect(vehicleClass).toHaveLength(1);
    
    const numPassengers = wrapper.find('.num-passengers');
    expect(numPassengers).toHaveLength(1);
  });
});