import React from 'react';
import { shallow } from 'enzyme';
import NewStudentForm from './NewStudentForm.js';

describe('Form', () => {
  it('should match the snapshot with all the data passed in correctly', () => {
    const addStudentMock = jest.fn();
    const wrapper = shallow(<NewStudentForm addStudent={addStudentMock}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should fire the handleChange method when change is detected in the input fields', () => {
    const addStudentMock = jest.fn();
    const wrapper = shallow(<NewStudentForm addStudent={addStudentMock}/>);

    wrapper.find('input').at(0).simulate('change', {target: { value: 'hello', name: 'title' } });
    wrapper.find('input').at(1).simulate('change', {target: { value: 'my friend', name: 'description' } });

    expect(wrapper.state('title')).toEqual('hello');
    expect(wrapper.state('description')).toEqual('my friend');
  })
});