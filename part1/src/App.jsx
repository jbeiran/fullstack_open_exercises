const App = () => {
  const course = 'Half Stack application development'

  const parts_and_exercises = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 },
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts_and_exercises={parts_and_exercises} />
      <Total parts_and_exercises={parts_and_exercises} />
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts_and_exercises[0].name} exercises={props.parts_and_exercises[0].exercises} />
      <Part name={props.parts_and_exercises[1].name} exercises={props.parts_and_exercises[1].exercises} />
      <Part name={props.parts_and_exercises[2].name} exercises={props.parts_and_exercises[2].exercises} />
    </div>
  );
}

const Part = (props) => {
  return <p>{props.name} {props.exercises}</p>
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts_and_exercises[0].exercises + props.parts_and_exercises[1].exercises + props.parts_and_exercises[2].exercises}</p>
    </div>
  )
}

export default App

