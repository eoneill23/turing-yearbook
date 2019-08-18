import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should match the snapshot with all the data passed in correctly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should add a new student with the addStudent method', () => {
    const wrapper = shallow(<App />);
    const mockStudent = {name: 'Travis',
      quote: 'Cheers',
      superlative: 'Most likely to say cheers',
      photo: '',
      id: 1, 
    };
    
    wrapper.instance().addStudent(mockStudent);
    expect(wrapper.instance().state.students.length).toEqual(27);
  });

  it('should delete a new student when the deleteStudent method is fired', () => {
    const wrapper = shallow(<App />);
    const mockStudent = {name: 'Travis',
      quote: 'Cheers',
      superlative: 'Most likely to say cheers',
      photo: '',
      id: 1, 
    };
    
    wrapper.instance().deleteStudent(1, 'students');
    expect(wrapper.instance().state.students.length).toEqual(26);
  })
});