import React from 'react';

function Person({person}) {
    return (
      <div>
        <h5>
          Name: {person.name} Age: {person.age} Skill: {person.skill}
        </h5>
      </div>
  )
}

export default Person;