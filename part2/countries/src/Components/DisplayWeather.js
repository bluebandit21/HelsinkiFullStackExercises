import React, {useState} from 'react'
import axios from 'axios'
import renderHTML from 'react-render-html';

const DisplayWeather = ({country}) => {
    const OPEN_WEATHER_MAP_API_KEY="1e62eeb5997264304f629b59f8bbb34f"
    const [queryResponse, setQueryResponse] = useState('')
    const [lastQuery, setLastQuery] = useState('')
    const queryWeather = (country) => {
        if(lastQuery === country.name) return
        setLastQuery(country.name)
        axios
            .request(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital},${country.cioc}&mode=html&units=imperial&appid=${OPEN_WEATHER_MAP_API_KEY}`)
            .then(request => {
                setQueryResponse(request.data)
            })
            .catch(error => {
                console.log("Errror in API call, ",error)
                setQueryResponse(`<p>Weather Query Failed</p>`)
            })
    }
    queryWeather(country)
    return (
        <div>
            <h3>Weather in {country.capital}:</h3>
            {queryResponse === '' ? <></> : renderHTML(queryResponse)}
        </div>
    )
}

export default DisplayWeather