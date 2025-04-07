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
      <Part part={props.info[0].name} ex={props.info[0].exercises}/>
      <Part part={props.info[1].name} ex={props.info[1].exercises}/>
      <Part part={props.info[2].name} ex={props.info[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.ex[0].exercises + props.ex[1].exercises + props.ex[2].exercises}</p>
    </div>
  )
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

      <Content info={[part1, part2, part3]}/>
      
      <Total ex={[part1, part2, part3]}/>
      
    </div>
  )
}

export default App