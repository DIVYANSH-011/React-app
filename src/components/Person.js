import React from 'react';

function Person({person}) {
    return (
        <div>
            <h2>my name is {person.name}. I am {person.age} years old. my skill is {person.skills}</h2>
        </div>
    );
}

export default Person;