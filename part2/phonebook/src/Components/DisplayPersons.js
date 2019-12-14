import React from 'react'

const Person = ({person}) => <p>{`${person.name}: ${person.number}`}</p>
const DisplayPersons = ({persons}) => {
    return (
        <ul>
            {
                persons.map(person => <li key={person.name}><Person person={person}/></li>)
            }
        </ul>
    )
}
export default DisplayPersons