import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>GIVE FEEDBACK</h2>
      <div className="botones">
        <Button setState={setGood} state={good} name="good"/>
        <Button setState={setNeutral} state={neutral} name="neutral"/>
        <Button setState={setBad} state={bad} name="bad"/>
      </div>
      {(good>0||neutral>0||bad>0)?<Statistics good={good} neutral={neutral} bad={bad}/>:<p>No Feedback given</p>}
    </div>
  )
}
const Statistics=({good, neutral,bad})=>{
  return (
    <>
      <h2>STATISTICS</h2>
      <div>
        <Statistic name="good" value={good}/>
        <Statistic name="neutral" value={neutral}/>
        <Statistic name="bad" value={bad}/>
        <Statistic name="all" value={good+neutral+bad}/>
        <Statistic name="average" value={(good*1+neutral*0+bad*-1)/(good+neutral+bad)}/>
        <Statistic name="positive" value={good/(good+neutral+bad)*100+"%"}/>
      </div>
    </>)
}
const Button=({setState,state,name})=>{
  return(
    <button onClick={()=>setState(state+1)}>{name}</button>
  )
}
const Statistic =({name,value})=>{
  return(
    <p>{name} <span>{value}</span></p>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
