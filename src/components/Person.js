import React from 'react';
import './Person.css';
import { tsPropertySignature } from '@babel/types';

let Person = ({name, quote, superlative, photo, id, deleteStudent, type}) => {
  let button;

  if (type === 'students') {
    button = <button onClick={() => deleteStudent(id, type)} type={type}>Delete</button>
  } else {
    button = ''
  }

  return (
    <section className="personCard" key={id}>
      <img src={photo}></img>
      <p className="personName">{name}</p>
      <p className="personQuote">"{quote}"</p>
      <p className="personSaying">{superlative}</p>
      {button}
    </section>
  )
}

export default Person;