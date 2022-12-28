
const Persons = ({persons, deleteContact}) => {

    return (

        <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Phone</th>
            </tr>
      {
      persons.map((person, index) => {
          return <tr> <td key={index}>{person.name}</td> <td>{person.number}</td>
              <td> <button >Delete</button></td> </tr>
      })
      }
        </table>
      
        </div>
    )
}
export default Persons
