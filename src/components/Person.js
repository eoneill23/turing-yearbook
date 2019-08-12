import React from 'react';
import './Person.css';

let Person = ({name, quote, superlative, photo, id}) => {
  return (
    <section className="personCard" key={id}>
      <img src={photo}></img>
      <p>{name}</p>
      <p>{quote}</p>
      <p>{superlative}</p>
    </section>
  )
}

export default Person;
