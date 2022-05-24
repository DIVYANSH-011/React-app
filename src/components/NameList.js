import React from 'react';
import Person from './Person';

function NameList() {
    const persons =  [
        {
            id : 1,
            name : 'divyansh',
            age : 20,
            skills : 'MERN'

        },
        {
            id:2,
            name:'sonam',
            age:22,
            skills:'kaatna'
        },
        {
            id:3,
            name:'sailu',
            age:99,
            skills:'kaaatna'
        }
    ]
    const personlist = persons.map(person => <Person key ={person.id} person  = {person} />)
    return <div>{personlist}</div>
}

export default NameList;