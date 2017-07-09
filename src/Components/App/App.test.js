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

  const ls = global.localStorage;

  beforeEach( () => {

    fetchMock.get('http://swapi.co/api/people/', {
      status: 200,
      body: mockPerson
    }).catch();

    fetchMock.get('http://swapi.co/api/species/1/', {
      status: 200,
      body: mockSpecies
    }).catch();

    fetchMock.get('http://swapi.co/api/planets/', {
      status: 200,
      body: mockPlanet
    }).catch();

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

  it.skip('fetchPeople() should return an object containing people data', async () => {
    await resolveAfter2Seconds();

    expect(fetchMock.called()).toEqual(true);
    expect(wrapperMounted.state().people).toEqual([{
      "name": "Luke Skywalker",
      "homeworld": "Tatooine",
      "species": "Human",
      "population": "200,000",
    }]);
  });

  it('fetchPlanets() should return an object containing planet data', async () => {
    await resolveAfter2Seconds();

    expect(fetchMock.called()).toEqual(true);
    expect(wrapperMounted.state().planets).toEqual([{
      "name": "Tatooine",
      "climate": "arid",
      "terrain": "desert",
      "population": "200,000",
      "residents": "none"
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

  it('handleState() should update state when given a key and associated data', async () => {
    await resolveAfter2Seconds();
    wrapper.instance().handleState('test', 'THAT IS CORRECT');

    expect(wrapper.state().test).toEqual('THAT IS CORRECT');
  });

  it('handleClick() should update `selectedTab` in state on click', async () => {
    await resolveAfter2Seconds();

    const favoriteBtn = wrapperMounted.find('.favorite-btn');
    const vehiclesBtn = wrapperMounted.find('.vehicles-btn');

    expect(wrapper.state().selectedTab).toEqual('FAVORITES');

    wrapper.instance().handleClick({target: {innerText: 'BOB'}});
    expect(wrapper.state().selectedTab).toEqual('BOB');
  });

  // it.only("checkForDuplicates() should return a -1 if card isnt't in favorites and a 0 if it is", async () => {
  //   await resolveAfter2Seconds();
  //   const mockedFn = jest.fn();
  //   const favoriteIcon = wrapperMounted.find('.fav-icon');
  //
  //   favoriteIcon.simulate('click')
  // })

  // it('handleFavorites() should add new cards to the favorites array in state', async () => {
  //   await resolveAfter2Seconds();
  //
  //   expect(wrapper.state().favorites).toEqual([]);
  //
  //   console.log('before');
  //   wrapper.instance().handleFavorites({name: 'Marigold'})
  //   expect(wrapper.state().favorites).toEqual([{name: 'Marigold', favorited: true}]);
  //
  //   console.log('start daisy');
  //   wrapper.instance().handleFavorites({name: 'Daisy'})
  //   console.log('start marigold 2');
  //   wrapper.instance().handleFavorites({name: 'Marigold', favorited: true})
  //   expect(wrapper.state().favorites).toEqual([
  //     {name: 'Marigold', favorited: true},
  //     {name: 'Daisy', favorited: true}
  //   ]);
  //
  // });

});
