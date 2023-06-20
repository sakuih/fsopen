import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'not connected to db' , number: '3213213'},
    { name: 'not connected to db' , number: '3213213'},
    { name: 'not connected to db' , number: '3213213'}
  ])
  const [newName, setNewName] = useState('')

  function deletePerson(e) {
     console.log("This person will be deleted", e)
  }
  function mapPersons(persons) {

      const mappedList = persons.map((person) =>
          <li key={person.index}>{person.name} {person.number} <button onClick={() => deletePerson(person.index)}>Delete</button></li>
      )
    return mappedList
    }

    return (
        <div>
          <h2>Phonebook</h2>
            Filter <input />
          <form>
              <h2>Add a new contact</h2>
            <div>
              name: <input /><br/>
              number: <input />
            </div>
            <div>
              <button type="submit">add</button>
            </div>
          </form>
          <h2>Numbers</h2>
            <ul>
                {mapPersons(persons)}
            </ul>

        </div>
    )
  }

export default App;
