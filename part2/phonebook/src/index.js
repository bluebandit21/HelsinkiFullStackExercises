import ReactDOM from 'react-dom'
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '312-307-0082'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const addEntry = (event) => {
    event.preventDefault()
    if(persons.map(a => a.name).includes(newName)){
      alert(`The name ${newName} is already present in the phonebook`)
      return
    }
    let newPerson = {name: newName, number: newNumber};
    console.log(newPerson);
    setPersons(persons.concat(newPerson))
    setNewName('');
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const displayEntries = ({persons}) => {
    return (
      <ul>
        {
          persons.map(person => <li key={person.name}>{`${person.name}: ${person.number}`}</li>)
        }
      </ul>
    )
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Add Entry</h3>
      <form onSubmit={addEntry}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
          <br></br>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <>{displayEntries({persons})}</>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))