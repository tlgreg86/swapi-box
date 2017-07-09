import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './Button';

describe('Button tests', () => {

  it('should render a button', () => {
    const wrapper = shallow(<Button selectedTab={''}
                                    value={''}
                                    btnClass={'favorite-btn'} />);

    expect(wrapper.find('button')).toHaveLength(1);
  })

  it('should call handleClick on button click', () => {
    const mockedFn = jest.fn();
    const wrapper = shallow(<Button selectedTab={'PEOPLE'}
                                  value={'PEOPLE'}
                                  btnClass={'people-btn'}
                                  handleClick={mockedFn} />);

    const button = wrapper.find('button')

    button.simulate('click')

    expect(mockedFn).toHaveBeenCalledTimes(1)
  })

  it('should display the correct Favorites count', () => {
    const wrapper = shallow(<Button selectedTab={'FAVORITES'}
                                    value={'FAVORITES'}
                                    btnClass={'favorite-btn'}
                                    count={'0'} />);

    expect(wrapper.find('.favorite-count').children().text()).toEqual('0')
  })
});
