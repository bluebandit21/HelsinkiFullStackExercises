import React, {useState} from 'react'
import ReactDOM from 'react-dom'
const Button = ({text,handler}) => <button onClick={handler}>{text}</button>
const Value = ({text,value}) => <>{text} {value}</>
const Display = ({values}) => {
  return (
    <div align="center">
      <Value text={values[0]} />
      <Value text={values[1]} />
      <Value text={values[2]} />
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
      <Display values={[["Good: ",good],["Neutral: ",neutral],["Bad: ",bad]]} />
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