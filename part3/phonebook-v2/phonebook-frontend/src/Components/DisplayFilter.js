import React from 'react'

import "./DisplayPersons"
import DisplayPersons from './DisplayPersons'

const DisplayFilter = ({persons,searchString,deletePerson}) => (searchString === '' ? <></> : <DisplayPersons persons={persons.filter(a => a.name.toLowerCase().includes(searchString.toLowerCase())) } deletePerson={deletePerson}/>)
export default DisplayFilter