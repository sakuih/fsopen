
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

	  <p>Good {good}</p>
	  <p>Neutral {neutral}</p>
	  <p>Bad {bad}</p>

	  <p>Average {avg()}</p>
	  <p>Positive {pos()}</p>

	</div>
</div>
)
}



export default Statistics
