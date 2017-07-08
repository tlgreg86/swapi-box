import React from 'react';
import ReactDOM from 'react-dom';
import fetchMock from 'fetch-mock';
import { shallow, mount } from 'enzyme';
import { mockPerson, 
         mockSpecies, 
         mockPlanet, 
         mockVehicle, 
         mockScroll } from '../../utils/mockData';
import App from './App';

describe('App tests', () => {
  let wrapper;
  let wrapperMounted;
  let resolveAfter2Seconds;
  
  beforeEach( () => {
    fetchMock.get('http://swapi.co/api/planets/1/', {
      status: 200, 
      body: mockPlanet
    }).catch();
    
    fetchMock.get('http://swapi.co/api/vehicles/', {
      status: 200, 
      body: mockVehicle
    }).catch();
    
    fetchMock.get('begin:http://swapi.co/api/films/', {
      status: 200, 
      body: mockScroll
    }).catch();
    
    wrapper = shallow(<App />);
    wrapperMounted = mount(<App />);
    resolveAfter2Seconds = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    }
  })
  
  afterEach( () => {
    // expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });
  
  it('should render', () => {
    expect(wrapper.find('.App')).toHaveLength(1);
  });
  
  it('should have state', () => {
    expect(wrapper.state).toHaveLength(1);
  });
  
  it('state should include favorites, people, planets, vehicles, scroll & selectedTab', () => {
    expect(wrapper.state().favorites).toEqual([]);
    expect(wrapper.state().people).toEqual([]);
    expect(wrapper.state().planets).toEqual([]);
    expect(wrapper.state().vehicles).toEqual([]);
    expect(wrapper.state().scroll).toEqual({});
    expect(wrapper.state().selectedTab).toEqual('FAVORITES');
    expect(typeof wrapper.state().selectedTab).toEqual('string');
  });
  
  it('scrollCall() should return an object containing a random scroll', async () => {
    await resolveAfter2Seconds();
    
    expect(fetchMock.called()).toEqual(true);
    expect(wrapperMounted.state().scroll).toEqual(mockScroll);
  });
  
  it('fetchPlanets() should return an object containing planet data', async () => {
    await resolveAfter2Seconds();
    
    expect(fetchMock.called()).toEqual(true);
    expect(wrapperMounted.state().planets).toEqual([{
      "name": "Tatooine", 
      "climate": "arid", 
      "terrain": "desert", 
      "population": "200000", 
      "residents": [
        "http://swapi.co/api/people/" 
      ]
    }]);
  });
  
  it('fetchVehicles() should return an object containing vehicle data', async () => {
    await resolveAfter2Seconds();
    
    expect(fetchMock.called()).toEqual(true);
    expect(wrapperMounted.state().vehicles).toEqual([{
      "name": "Sand Crawler", 
      "model": "Digger Crawler", 
      "numPassengers": "30", 
      "vehicleClass": "wheeled" 
    }]);
  });
});
