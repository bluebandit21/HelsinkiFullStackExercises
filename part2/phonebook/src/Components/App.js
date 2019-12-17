import React, { useState, useEffect } from 'react'

import './DisplayPersons'
import './DisplayFilter'
import './Form'
import DisplayPersons from './DisplayPersons'
import DisplayFilter from './DisplayFilter'
import Form from './Form'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([]) 
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
  
  useEffect(() => {
    console.log('@Effect')
    axios
    .request('http://localhost:3001/persons')
    .then(request => {
      console.log('@Response',request)
      setPersons(request.data)
    })
  },[])

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Add Entry</h3>
      <Form onSubmit={addEntry} fields={
        [
          {description: 'name',value: newName,onChange: handleNameChange},
          {description: 'number',value: newNumber,onChange: handleNumberChange}
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

export default App