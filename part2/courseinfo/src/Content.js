
function Content({course }) {


return (
	<div>
    {course.map(x => {
    return (
    <p key={x.id}>
        {x.name} {x.exercises}
    </p>
    )
    })}

	</div>
)
}

export default Content
