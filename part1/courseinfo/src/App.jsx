const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}


const Part = (props) => {
  return (
    <div>{props.part} {props.ex}</div>
  )  
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.info[0].part} ex={props.info[0].exercise}/>
      <Part part={props.info[1].part} ex={props.info[1].exercise}/>
      <Part part={props.info[2].part} ex={props.info[2].exercise}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.ex[0].exercise + props.ex[1].exercise + props.ex[2].exercise}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'

  const info = [
    {part: 'Fundamentals of React', exercise: 10},
    {part: 'Using props to pass data', exercise: 7},
    {part: 'State of a component', exercise: 14}
  ]

  return (
    <div>
      <Header course={course} />

      <Content info={info}/>

      <Total ex={info}/>
    </div>
  )
}

export default App