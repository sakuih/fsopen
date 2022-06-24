import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

    function handleName(event) {

        console.log(event.target.value)
        setNewName(event.target.value)
        setPersons(newName)
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
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
        {() => {
            persons.map((name) => {
                return <li>{name}</li> 
            })
        }}      

    </div>
  )
}

export default App
