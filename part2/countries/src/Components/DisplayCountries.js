import React from 'react'

import Country from './Country.js'

const DisplayCountries = ({countries}) => {
    if(countries.length > 10) return <p>Too Many matches, please refine your query</p>
    if(countries.length === 0) return <p>Your search does not match any countries</p>
    if(countries.length === 1) return <Country country={countries[0]} />
    return (
        <ul>
            {countries.map(country => <li key={country.name}>{country.name}</li>)}
        </ul>
    )
}

export default DisplayCountries