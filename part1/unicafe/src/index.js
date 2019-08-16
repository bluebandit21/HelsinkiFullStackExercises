import React, {useState} from 'react'
import ReactDOM from 'react-dom'
const Button = ({text,handler}) => <button onClick={handler}>{text}</button>
const Statistic = ({text,value}) => <tr><td>{text}</td><td>{value}</td></tr> //Why must this be a thing?
const Display = ({good,neutral,bad}) => {
  return (
    <>
      <Statistic text="Good: " value={good} />
      <Statistic text="Neutral: " value={neutral} />
      <Statistic text="Bad: " value={bad} />
    </>
  )
}
const Statistics = ({good,neutral,bad}) => {
  let total=good+bad+neutral
  if (total===0) return <p>No feedback given yet.</p>
  return (
    <div align="center">
      <table>
        <tbody>
          <Display good={good} neutral={neutral} bad={bad} />
          <Statistic text="Total number of reviews: " value={total} />
          <Statistic text="Average review score: " value={total ? ((good-bad)/total).toFixed(2) : "N/A"} />
          <Statistic text="Positive feedback: " value={(total ? (good / total * 100).toFixed(0) : "")+"%"} />
        </tbody>
      </table>
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
      <Statistics good={good} neutral={neutral} bad={bad} />
      <br></br>
      <h1 align="center">Give Your Own Feedback</h1>
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