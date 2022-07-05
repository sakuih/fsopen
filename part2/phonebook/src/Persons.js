
const Persons = ({persons}) => {

    return (

        <div>
      {
      persons.map((person, index) => {
          return <li key={index}> {person.name} {person.number} </li>
      })
      }
      
        </div>
    )
}
export default Persons
