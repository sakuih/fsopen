import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

    function handleName(e) {
        console.log(e)
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <form >
        <div>
          name: <input
                value={newName}
                onChange={handleName}
                />

        </div>
           <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
            
      {persons.map((person, index) => {
        return <li key={index}> {person.name} </li>
      })}

    </div>
  )
}

export default App
