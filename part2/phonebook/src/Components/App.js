import React, { useState, useEffect } from 'react'

import './DisplayPersons'
import './DisplayFilter'
import './Form'
import DisplayPersons from './DisplayPersons'
import DisplayFilter from './DisplayFilter'
import Form from './Form'

import personService from '../Services/persons'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchString, setSearchString ] = useState('')
  const addEntry = (event) => {
    event.preventDefault()
    if(newName === ''){
      alert("You must enter a name")
      return
    } 
    if(persons.map(a => a.name).includes(newName)){
      if (window.confirm(`The name ${newName} is already present in the phonebook.\nDo you want to update the number?`)){
        personService
          .updatePerson(persons.filter(a => a.name === newName)[0],newNumber)
          .then(retval => {
            if(retval !== 0){
              alert("An error occured while contacting the server.\nPlease try again.")
            }
          })
        setPersons(persons.map(person => person.name !== newName ? person : {...person,number:newNumber}))
        setNewName('');
        setNewNumber('');
      }
      return
    }
    let newPerson = {name: newName, number: newNumber};
    personService
      .addPerson(newPerson)
      .then(retval => {
        if(retval !== 0){
          alert("An error occured while contacting the server.\nPlease try again.")
        }
      })
    setPersons(persons.concat(newPerson))
    setNewName('');
    setNewNumber('');
  }
  const deleteEntry = (person) => () => {
    if(window.confirm(`Really delete ${person.name}?`) !== true) return
    personService
      .deletePerson(person)
      .then(retval => {
        if(retval !== 0){
          alert("An error occured while attempting to delete the entry.\nThe entry might have already been deleted.")
        }
      })
      setPersons(persons.filter(currentPerson => currentPerson.name !== person.name))
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
    personService
      .getAll()
        .then(data => {
          setPersons(data)
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
      <DisplayPersons persons={persons} deletePerson={deleteEntry}/>
    </div>
  )
}

export default App