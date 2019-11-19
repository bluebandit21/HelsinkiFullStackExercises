import ReactDOM from 'react-dom'
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const addEntry = (event) => {
    event.preventDefault();
    let newPerson = {name: newName};
    console.log(newPerson);
    setPersons(persons.concat(newPerson));
    setNewName('');
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }
  const displayEntries = ({persons}) => {
    return (
      <ul>
        {
          persons.map(person => <li key={person.name}>{person.name}</li>)
        }
      </ul>
    )
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addEntry}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>{displayEntries({persons})}</>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))