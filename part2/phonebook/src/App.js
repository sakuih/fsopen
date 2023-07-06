import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'not connected to db' , number: '3213213'},
    { name: 'not connected to db' , number: '3213213'},
    { name: 'not connected to db' , number: '3213213'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  function handleNameChange(e) {
      console.log("handleNameChange")
     setNewName(e.target.value)
  }
    function handleNumberChange(e) {
        console.log("handleNumberChange")
        setNewNumber(e.target.value)
    }
      function deletePerson(e) {

         console.log("This person will be deleted", e)
      }
          function createPerson(e) {
            console.log("Person created")
              e.preventDefault()
              console.log(e)
              console.log(e.target[0].value)
              console.log(e.target[1].value)
              const newPerson = {
                name: newName,
                number: newNumber,
              }
                setPersons(persons.concat(newPerson))
                setNewName(newName)
                setNewNumber(newNumber)
                
          }
              function mapPersons(persons) {

                  const mappedList = persons.map((person, index) =>
                      <li key={index}>{person.name} {person.number} <button onClick={() => deletePerson(index)}>Delete</button></li>
                  )
                return mappedList
                    }

    return (
        <div>
          
          <h2>Phonebook</h2>
            Filter <input />
          <form onSubmit={createPerson}>
              <h2>Add a new contact</h2>
             <div>
                  name: <input
                  type="text"
                  value={newName}
                  onChange={handleNameChange}
                  placeholder="Enter name"
              />
              </div>
                <br/>
              <div>
                  number: <input
                  type={"number"}
                  value={newNumber}
                  onChange={handleNumberChange}
                  placeholder="Enter number"
              />
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
