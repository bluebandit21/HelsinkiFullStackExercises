import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handler}) => <button onClick={handler}>{text}</button>
const App = (props) => {
  let anecdotes=props.anecdotes
  const [selected, setSelected] = useState(0)
  let zeroFilledArray = new Uint8Array(anecdotes.length)
  const [votes, updateVotes] = useState(zeroFilledArray)
  const randomizeAnecdote = () => () => {
    let number = Math.floor(Math.random() * (anecdotes.length));
    setSelected(number)
  }
  const upvoteAnecdote = (selected) => () => {
    const copy = [...votes]
    copy[selected] += 1
    updateVotes(copy)
  }
  const Anecdote = ({anecdote,votes}) => {
    return (
      <p>{anecdote} -- {votes} votes</p>
    )
  }
  return (
    <div>
      <Button text="Give me an anecdote!" handler={randomizeAnecdote()} />
      <Button text="I like this one!" handler={upvoteAnecdote(selected)} />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
