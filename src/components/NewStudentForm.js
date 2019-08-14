import React, { Component } from 'react';

class NewStudentForm extends Component {
  constructor(props) {
    super(props);
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
      <form>
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
        <button onClick={event => this.submitStudent(event)}>Add student</button>
      </form>
    )
  }
}

export default NewStudentForm;