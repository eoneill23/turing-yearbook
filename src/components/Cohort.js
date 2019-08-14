import React from 'react';
import Person from './Person';
import './Cohort.css';

let Cohort = (props) => {
let peopleList = props.people.map(person => (
  <Person key={person.id}
    name={person.name}
    quote={person.quote}
    superlative={person.superlative}
    photo={person.photo}
    id={person.id}
    deleteStudent={props.deleteStudent}
    type={props.type}
  />
  ))

  return (
    <main className="cardsDisplay">
      {peopleList}
    </main>
  );
}

export default Cohort;
