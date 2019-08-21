import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => (<h1>{course}</h1>)
const Part = ({part}) => (<p>{part.name} {part.exercises}</p>)
const Content = ({parts}) => <>{parts.map(part => <Part part={part} key={part.id} />)}</>
const Total = (props) => {
    let sum=0;
    props.parts.forEach(element => sum+=element.exercises);
    return (<p>Number of exercises {sum}</p>)
}
const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
    
  return (
    <Course course={course} />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))