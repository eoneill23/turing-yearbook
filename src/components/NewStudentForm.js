import React, { Component } from 'react';
import './NewStudentForm.css'

class NewStudentForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      superlative: ''
    }
  }

  handleChange = (event) => {
    this.setState( { [event.target.name]: event.target.value } )
  }

  submitStudent = (event) => {
    event.preventDefault();
    let newStudent = {
      id: Date.now(),
      photo: 'http://4.bp.blogspot.com/-ZjhykHvukQE/Txl4IFWIeuI/AAAAAAAAEuE/8COvzOwGjyw/s1600/Funny-Llama-01.jpg',
      ...this.state
    }
    this.props.addStudent(newStudent);
    this.setState({
      name: '',
      quote: '',
      superlative: ''
    })
  }

  render() {
    return (
      <form className='studentForm'>
        <h3>Add a student</h3>
        <input 
          type='text'
          placeholder='Student name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input 
          type='text'
          placeholder='Student quote'
          name='quote'
          value={this.state.quote}
          onChange={event => this.handleChange(event)}
        />
        <input 
          type='text'
          placeholder='Student superlative'
          name='superlative'
          value={this.state.superlative}
          onChange={event => this.handleChange(event)}
        />
        <button className='formButton' onClick={event => this.submitStudent(event)}>Add student</button>
      </form>
    )
  }
}

export default NewStudentForm;