import { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    {id: 0, name: 'not connected to db' , number: '3213213'},
    {id: 1, name: 'not connected db' , number: '213'},
    {id: 2, name: 'not db' , number: '3213213321321321'}
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
         console.log("1This person will be deleted", e)
         const updatedList = persons.filter((person) => person.id !== e) 
         
         setPersons(updatedList)
         console.log("2This person will be deleted", e)
      }
          function createPerson(e) {
            console.log("Person created")
              e.preventDefault()
              console.log(e)
              console.log(e.target[0].value)
              console.log(e.target[1].value)
              const newPerson = {
                id: persons.length + 1,
                name: newName,
                number: newNumber,
              }
                setPersons(persons.concat(newPerson))
                setNewName(newName)
                setNewNumber(newNumber)
                
          }
              function mapPersons(persons) {

                  return persons.map((person) =>
                      <li key={person.id}>{person.name} {person.number} <button onClick={() => deletePerson(person.id)} >Delete</button></li>)
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
