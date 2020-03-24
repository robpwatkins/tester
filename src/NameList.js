import React from 'react';
import Person from './Person';

function NameList() {
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Svetlana',
      age: 17,
      skill: 'Jorbs'
    },
    {
      id: 3,
      name: 'Tiny',
      age: 3,
      skill: 'Baby'
    },
  ]
  const personList = persons.map((person, i) => (
    <Person key={i} person={person}></Person>
  ))
  return <div>{personList}</div>
}

export default NameList;