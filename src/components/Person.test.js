import React from 'react';
import { shallow } from 'enzyme';
import Person from './Person.js';

describe('Person', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Person 
      name={'Travis'}
      quote={'Cheers'}
      superlative={'Most likely to say cheers'}
      photo={''}
      id={1}
      deleteStudent={jest.fn()}
      type={'students'}
    />)

    expect(wrapper).toMatchSnapshot();
  });

});