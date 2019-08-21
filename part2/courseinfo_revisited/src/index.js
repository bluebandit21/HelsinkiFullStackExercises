import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => (<h2>{course}</h2>)
const Part = ({part}) => (<p>{part.name} {part.exercises}</p>)
const Content = ({parts}) => <>{parts.map(part => <Part part={part} key={part.id} />)}</>
const Total = ({parts}) => {
  const exercises = parts.map(a=>a.exercises)
  return (<p>Number of exercises {exercises.reduce((a,b)=>a+b)}</p>)
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
const Courses = ({courses}) => <>{courses.map(course => <Course course={course} />)}</>
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
    
  return (
    <Courses courses={courses} />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))