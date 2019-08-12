import React from 'react';
import './Person.css';

let Person = ({name, quote, superlative, photo, id}) => {
  return (
    <section className="personCard" key={id}>
      <img src={photo}></img>
      <p className="personName">{name}</p>
      <p className="personQuote">"{quote}"</p>
      <p className="personSaying">{superlative}</p>
    </section>
  )
}

export default Person;
