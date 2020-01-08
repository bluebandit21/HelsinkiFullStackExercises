import React from 'react'

const Person = ({person}) => <span>{`${person.name}: ${person.number}`}</span>
const DisplayPersons = ({persons,deletePerson}) => {
    return (
        <ul>
            {
                persons.map(person => {
                    return (
                        <li key={person.name}>
                            <Person person={person}/>
                            <button onClick={deletePerson(person)}>Remove</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default DisplayPersons