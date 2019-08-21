import React from 'react'

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

export default Courses