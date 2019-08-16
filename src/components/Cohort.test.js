import React from 'react';
import { shallow } from 'enzyme';
import Cohort from './Cohort';

describe('Cohort', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const people = []
    const deleteStudent = jest.fn()
    const type = 'staff'
    const wrapper = shallow(<Cohort people={people} deleteStudent={deleteStudent} type={type}/>);
  
    expect(wrapper).toMatchSnapshot();
  });
});