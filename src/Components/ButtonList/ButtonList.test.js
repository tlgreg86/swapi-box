import React from 'react';
import { shallow, mount } from 'enzyme';
import ButtonList from './ButtonList';

describe('ButtonList tests', () => {

  const wrapperShallow = shallow(<ButtonList />)

  const mockedFn = jest.fn();
  const wrapperMount = mount(<ButtonList selectedTab={''}
                                    handleClick={mockedFn} />)

  it('should render button list', () => {
    expect(wrapperShallow.find('.button-list')).toHaveLength(1)
  })

  it('should render four buttons', () => {
    expect(wrapperMount.find('button')).toHaveLength(4)
  })

  it('should render Favorites, People, Planets, and Vehicles buttons', () => {
    expect(wrapperMount.find('.button-list').childAt(0).hasClass('favorite-btn')).toEqual(true)
    expect(wrapperMount.find('.button-list').childAt(1).hasClass('people-btn')).toEqual(true)
    expect(wrapperMount.find('.button-list').childAt(2).hasClass('planets-btn')).toEqual(true)
    expect(wrapperMount.find('.button-list').childAt(3).hasClass('vehicles-btn')).toEqual(true)
  })
});
