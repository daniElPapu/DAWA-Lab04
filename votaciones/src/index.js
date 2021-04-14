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
        <button onClick={()=>setGood(good+1)}>good</button>
        <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
        <button onClick={()=>setBad(bad+1)}>bad</button>
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
        <p>good <span>{good}</span></p>
        <p>neutral <span>{neutral}</span></p>
        <p>bad <span>{bad}</span></p>
        <p>all <span>{good+neutral+bad}</span></p>
        <p>average <span>{(good*1+neutral*0+bad*-1)/(good+neutral+bad)}</span></p>
        <p>positive <span>{good/(good+neutral+bad)*100}%</span></p>
      </div>
    </>)
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
