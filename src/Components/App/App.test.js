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
  const wrapper = shallow(<App />);
  const resolveAfter2Seconds = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
  
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
    fetchMock.get('begin:http://swapi.co/api/films/', {
      status: 200, 
      body: mockScroll
    })
    .catch();
    
    const wrapperMounted = mount(<App />);
    await resolveAfter2Seconds();
    
    expect(fetchMock.called()).toEqual(true);
    expect(wrapperMounted.state().scroll).toEqual(mockScroll);
  });
});
