import React from 'react';
import './Person.css';

let Person = ({name, quote, superlative, photo, id, deleteStudent, type}) => {
  let button;

  if (type === 'students') {
    button = <button onClick={() => deleteStudent(id, type)} type={type}>Delete</button>
  } else {
    button = ''
  }

  return (
    <section className='personCard' key={id}>
      <img src={photo}></img>
      <p className='personName' contentEditable='true' suppressContentEditableWarning={true}>{name}</p>
      <p className='personQuote' contentEditable='true' suppressContentEditableWarning={true}>"{quote}"</p>
      <p className='personSaying' contentEditable='true' suppressContentEditableWarning={true}>{superlative}</p>
      {button}
    </section>
  )
}

export default Person;