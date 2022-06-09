import {useState} from 'react'
import Statistics from './Statistics.js'
import Button from './Button.js'

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [statsVisibility, setStatsVisibility] = useState(false)
 const showStats = () => setStatsVisibility(true) 
  

  function incGood() {
	setGood(good + 1)
	setTotal(total + 1)
	showStats()
  }
  function incNeutral() {
	setNeutral(neutral + 1)
	setTotal(total + 1)
	showStats()
  }
  function incBad() {
	setBad(bad + 1)
	setTotal(total + 1)
	showStats()
  }

  return (
  <div>
	  <h1><b>Give feedback</b></h1>

	  <Button name="Good" click={incGood} />
	  <Button name="Neutral" click={incNeutral} />
	  <Button name="Bad" click={incBad} />

	  { statsVisibility ? null : <h2>No feedback given</h2> }	 
	  { statsVisibility ?  <Statistics good={good} bad={bad} neutral={neutral} total={total} /> :null }


  </div>
  );
}

export default App;
