import React, {useState} from 'react'
import ReactDOM from 'react-dom'
const Button = ({text,handler}) => <button onClick={handler}>{text}</button>
const Display = ({good,neutral,bad}) => {
  return (
    <div align="center">
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}
const Statistic = ({text,value}) => <p>{text} {value}</p> //Why must this be a thing?
const Statistics = ({good,neutral,bad}) => {
  let total=good+bad+neutral
  return (
    <div align="center">
      <Statistic text="Total number of reviews: " value={total} />
      <Statistic text="Average review score: " value={total!==0 ? ((good-bad)/total).toString().substr(0,4) : "N/A"} />
      <Statistic text="Positive feedback: " value={(good ? (good / total * 100).toString().substr(0,4) : "")+"%"} />
    </div>
  )
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementBad = () => () => setBad(bad+1)
  const incrementGood = () => () => setGood(good+1)
  const incrementNeutral = () => () => setNeutral(neutral+1)

  return ( 
    <>
      <h1 align="center">Customer Feedback:</h1>
      <Display good={good} neutral={neutral} bad={bad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
      <br></br>
      <div align="center">
        <Button text="Good" handler={incrementGood()}/> 
        <Button text="Neutral" handler={incrementNeutral()}/> 
        <Button text="Bad" handler={incrementBad()}/> 
      </div>
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)