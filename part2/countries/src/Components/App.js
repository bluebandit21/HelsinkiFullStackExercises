import React, { useState,componentDidUpdate } from 'react'

import axios from 'axios'
import DisplayCountries from './DisplayCountries.js'
const App = () => {

  const [ searchResults, setSearchResults ] = useState([])
  const [ searchString, setSearchString ] = useState('')

  const handleSearchChange = (event) => {
    setSearchString(event.target.value)
    axios
      .request('https://restcountries.eu/rest/v2/name/'+event.target.value)
      .then(request => {
        setSearchResults(request.data)
      })
      .catch(error => {
        console.log("Promised rejected, ",error)
        setSearchResults([])
      })
  }

  return (
    <div>
      <h3>Search</h3>
      <input value={searchString} onChange={handleSearchChange}/>
      {searchString === '' ? <div></div> : <DisplayCountries countries={searchResults}/>}
    </div>
  )
}

export default App