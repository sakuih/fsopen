import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123', id: 1 }
  ]) 
  const [newName, setNewName] = useState('')
  const [filter, setFilter] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
        const isNameOnList = persons.every(m => {
            if(m.name === newName){
                return true
            }
            else {
                return false
            }
        }) 

    //Conditional rendering = condition ? true : false}
    // Handling name
    function handleName(e) {
        console.log("handleName function content", e.target.value)
        setNewName(e.target.value)
    }
    // Handling number
    function handleNumber(e) {
        console.log("handleNumber function content", e.target.value)
        setNewNumber(e.target.value)
    }
    function handleFilter(e) {
        setShowAll(false)
        setFilter(e.target.value)
        if (newName === ''){
            setShowAll(true)
        }
    }
    
    // Taking name and number into persons array
    function concatContact(e) {
        e.preventDefault()
        console.log("form on submit", e.target, "newName value is ", newName)
        const tempObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
        }
        if (isNameOnList){
            alert("Name is already on the list")
        } else {
            setPersons(persons.concat(tempObject))
            setNewName('')
            setNewNumber('')
        }

    }
    /**
     *
     *
      filter contacts: <input 
                        value={filter}
                        onChange={handleFilter}
                        />
                */

  return (
    <div>
      <h2>Phonebook</h2>
      <h2> Add a new contact </h2>
      <form onSubmit={concatContact}>
        <div>
          name: <input
                value={newName}
                onChange={handleName}
                /><br/>
        </div>
        <div>
          number: <input
                value={newNumber}
                onChange={handleNumber}
                /><br/>
        </div>
           <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
            
      {showAll
      ? persons.map((person, index) => {
          console.log("showAll value is ", showAll)
          return <li key={index}> {person.name} {person.number} </li>
      })
      : console.log("showAll thing")
      }

    </div>
  )
}
export default App
