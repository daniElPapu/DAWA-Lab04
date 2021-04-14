import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
const App = (props) => {
  const comienzo =Math.floor(Math.random()*(props.anecdotas.length))
  const [selected, setSelected] = useState(comienzo)
  const [arreglo,setArreglo]=useState([0,0,0,0,0,0])
  const [mayor, setMayor] = useState(comienzo)
  return (
    <div className="app">
      <h2>Anecdota del día</h2>
      {props.anecdotas[selected]}
      <br/>
      <b>has {arreglo[selected]} votes</b>
      <br/>
      <div className="botones">
        <button onClick={()=>{
            arreglo[selected]+=1
            setArreglo(arreglo.slice())
            setMayor(arreglo.indexOf(Math.max(...arreglo)))
          }}>vote</button>
        <button onClick={()=>{
              setSelected(Math.floor(Math.random()*(props.anecdotas.length)))
            }
          }>Anecdota Aleatoria</button>
      </div>
      <h2>Anecdota con más votos</h2>
      {props.anecdotas[mayor]}
      <br/>
      <b>has {arreglo[mayor]} votes</b>
    </div>
  )
}

const anecdotas = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotas={anecdotas} />,
  document.getElementById('root')
)