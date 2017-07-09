import React from 'react';
import { shallow, mount } from 'enzyme';
import ButtonList from './ButtonList';

describe('ButtonList tests', () => {

  const wrapper = shallow(<ButtonList />)

  it('should render button list', () => {
    expect(wrapper.find('.button-list')).toHaveLength(1)
  })

  it('should render four buttons', () => {
    const mockedFn = jest.fn();
    const wrapper = mount(<ButtonList selectedTab={''}
                                      handleClick={mockedFn} />)

    expect(wrapper.find('button')).toHaveLength(4)
  })

  // it('should render a Favorites button', () => {
  //   const wrapper = mount(<ButtonList selectedTab={''} />);
  //   console.log(wrapper.debug());
  //
  //   expect(wrapper.find('button').children().text()).toEqual('FAVORITES')
  // })

  // it('should render a People button')

  // it('should render a Planets button')

  // it('should render a Vehicles button')
});
