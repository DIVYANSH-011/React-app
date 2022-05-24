import React from 'react';
import Person from './Person';

function NameList() {
    const names = ['divyansh','utkasrh','vishal']
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
    const NameList = names.map(name => <h2>{name}</h2>)
    return <div>{NameList}</div>
}

export default NameList;