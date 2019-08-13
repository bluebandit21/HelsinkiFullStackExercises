import React from 'react'
import ReactDOM from 'react-dom'
import { sign } from 'crypto';

const Header = (props) => (<h1>{props.course}</h1>)
const Part = (props) => (<p>{props.part_title} {props.exercise_count}</p>)
const Content = (props) => {
    return (
        <>
        <Part part_title={props.part_titles[0]} exercise_count={props.exercise_counts[0]} />
        <Part part_title={props.part_titles[1]} exercise_count={props.exercise_counts[1]} />
        <Part part_title={props.part_titles[2]} exercise_count={props.exercise_counts[2]} />
        </>
    )
  }
const Total = (props) => {
    var sum=0;
    for(var i=0;i<props.exercise_counts.length;i++){
        sum+=props.exercise_counts[i];
    }
    return  (<p>Number of exercises {sum}</p>)
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part_titles={[part1,part2,part3]} exercise_counts={[exercises1,exercises2,exercises3]} />
      <Total exercise_counts={[exercises1,exercises2,exercises3]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))