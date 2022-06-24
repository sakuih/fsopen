
function Total({course}) {

    const initialValue = 0
    const total = course.reduce(
        (previousValue, currentValue) => previousValue + currentValue.exercises,
    initialValue
    )

return (

	<div>
		<b>total of {total} exercises </b>
    {console.log(total)}
	</div>
)
}
export default Total
