import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import NewStudentForm from './NewStudentForm.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }

    this.addStudent = this.addStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  addStudent(newStudent) {
    this.setState({students: [...people.students, newStudent]});
  }

  deleteStudent(id, type) {
    let filteredIdeas = this.state[type].filter(person => person.id !== id);

    this.setState({[type]: filteredIdeas})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Turing Yearbook</h1>
        <h2>Staff</h2>
        </header>
          <Cohort people={this.state.staff} deleteStudent={this.deleteStudent} type={'staff'}/>
        <h2>Students</h2>
          <Cohort people={this.state.students} deleteStudent={this.deleteStudent} type={'students'}/>
          <NewStudentForm addStudent={this.addStudent}/>
      </div>
    );
  }
}

export default App;
