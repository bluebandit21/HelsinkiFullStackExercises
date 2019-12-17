import React from 'react'

import DisplayWeather from './DisplayWeather'

const Country = ({country}) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <br></br>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <br></br>
            <h3>Languages Spoken:</h3>
            <ul>
            {
                country.languages.map(language => <li key={country.name+':'+language.name}>{language.name}</li>)
            }
            </ul>
            <img src={country.flag} style={{width: '30%', height: 'auto'}} alt=''></img>
            <DisplayWeather country={country} />
        </div>
    )
}

export default Country
