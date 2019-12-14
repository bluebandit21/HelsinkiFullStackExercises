import ReactDOM from 'react-dom'
import React, { useState } from 'react'

import "./Components/DisplayPersons"
import "./Components/DisplayFilter"
import "./Components/Form"
import DisplayPersons from './Components/DisplayPersons'
import DisplayFilter from './Components/DisplayFilter'
import Form from './Components/Form'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchString, setSearchString ] = useState('')
  const addEntry = (event) => {
    event.preventDefault()
    if(persons.map(a => a.name).includes(newName)){
      alert(`The name ${newName} is already present in the phonebook`)
      return
    }
    let newPerson = {name: newName, number: newNumber};
    setPersons(persons.concat(newPerson))
    setNewName('');
    setNewNumber('');
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    setSearchString(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Add Entry</h3>
      <Form onSubmit={addEntry} fields={
        [
          {description: "name",value: newName,onChange: handleNameChange},
          {description: "number",value: newNumber,onChange: handleNumberChange}
        ]
      } />
      <h3>Search</h3>
      <input value={searchString} onChange={handleSearchChange}/>
      <DisplayFilter persons={persons} searchString={searchString} />
      <h3>Numbers</h3>
      <DisplayPersons persons={persons} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))