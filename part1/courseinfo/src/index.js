import React from 'react'
import ReactDOM from 'react-dom'
import { sign } from 'crypto';

const Header = (props) => (<h1>{props.course}</h1>)
const Part = (props) => (<p>{props.part.name} {props.part.exercises}</p>)
const Content = (props) => {
    return (
        <>
        <Part part={props.parts[0]} />
        <Part part={props.parts[1]} />
        <Part part={props.parts[2]} />
        </>
    )
  }
const Total = (props) => {
    let sum=0;
    for(let i=0;i<props.exercise_counts.length;i++){
        sum+=props.exercise_counts[i];
    }
    return  (<p>Number of exercises {sum}</p>)
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={[part1,part2,part3]} />
      <Total exercise_counts={[part1.exercises,part2.exercises,part3.exercises]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))