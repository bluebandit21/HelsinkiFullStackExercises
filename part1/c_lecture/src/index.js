import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { tsPropertySignature } from '@babel/types';

const Display = ({counter}) => <div>{counter}</div>
const Button = ({text,handler}) => <button onClick={handler}>{text}</button>
const App = (props) => {
  const [counter,setCounter] = useState(0)

  const setToValue = (value) => () => setCounter(value)

  return (
    <div>
        <Display counter={counter} />
        <Button text="Increment" handler={setToValue(counter+1)} />
        <Button text="Zero" handler = {setToValue(0)} />
    </div>
  )
} 

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)