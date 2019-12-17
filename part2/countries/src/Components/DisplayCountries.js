import React, {useState} from 'react'

import Country from './Country.js'

const DisplayCountries = ({countries}) => {
    const [shownCountry,setShownCountry] = useState([])
    const [oldCountries,setOldCountries] = useState([])
    if(oldCountries !== countries){
        setShownCountry([])
        setOldCountries(countries)
    }
    if(countries.length > 10) return <p>Too Many matches, please refine your query</p>
    if(countries.length === 0) return <p>Your search does not match any countries</p>
    if(countries.length === 1) return <Country country={countries[0]} />
    
    const handleButton = (country) => () => {
        setShownCountry(country)
    }
    return (
        <div>
            <ul>
                {
                    countries.map(country => {
                        return (
                            <li key={country.name}>
                                <p>{country.name}</p>
                                <button onClick={handleButton(country)}>Show</button>
                            </li>
                        )
                    })
                }
            </ul>
            {
                shownCountry.name ? <Country country={shownCountry} /> : <></>
            }
        </div>
    )
}

export default DisplayCountries