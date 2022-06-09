import StatisticLine from './StatisticLine.js'

function Statistics({good, bad, neutral, total}) {

  function avg() {
	return (good - bad) / total
  }
  function pos() {
	return good / total
  }

return (
<div >
	<div >

	  <h1><b>Statistics</b></h1>
		<table>
			<tbody>
		
	  		<StatisticLine text="Good" value={good} />
	  		<StatisticLine text="Neutral" value={neutral} />
	  		<StatisticLine text="Bad" value={bad} />

	  		<StatisticLine text="Average" value={avg()} />
	  		<StatisticLine text="Postive" value={pos()} />

			</tbody>
		</table>

	</div>
</div>
)
}



export default Statistics
