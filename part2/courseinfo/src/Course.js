import Header from './Header.js'
import Content from './Content.js'
import Total from './Total.js'

function Course({course}) {

return(
    <div>
      	<Header course = {course.name}/>
    	<Content course={course.parts}  />
      	<Total course={course.parts} />
    </div>
)
}



export default Course
