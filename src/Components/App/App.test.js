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
  
  it('vehicles', async () => {
    const mockVehicleFn = () => {
      const mockVehicle = { results: [ { name: "Sand Crawler", 
                                         model: "Digger Crawler", 
                                         passengers: 0, 
                                         vehicle_class: 'wheeled'}
                                     ]
                          }
      
    }
    const wrapperMounted = mount(<App />);
      
    
    expect(wrapper.state().vehicles).toEqual([]);
  });
  
  it('scrollCall() should return an object containing a random scroll', () => {
    fetchMock.get('http://swapi.co/api/people/', 
      
    )
    .catch(unmatchedURL => {
      console.log('boooo');
    })
    
    const wrapperMounted = mount(<App />);
    console.log(wrapperMounted.debug());
    expect(1).toEqual(2);
  })
  
  it('')
  
});
